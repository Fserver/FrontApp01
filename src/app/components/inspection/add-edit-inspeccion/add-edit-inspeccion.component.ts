import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { EstadoService } from 'src/app/services/estado/estado.service';
import { InspectionService } from 'src/app/services/inspection/inspection.service';
import { TiposinspectionService } from 'src/app/services/tiposinspection/tiposinspection.service';

@Component({
  selector: 'app-add-edit-inspeccion',
  templateUrl: './add-edit-inspeccion.component.html',
  styleUrls: ['./add-edit-inspeccion.component.css']
})
export class AddEditComponent {

  InspectionList$!: Observable<any[]>
  InspectionEstadoList$!: Observable<any[]>
  InspectionTypeList$!: Observable<any[]>

  constructor(
    private serviceInspection: InspectionService,
    private serviceTypeInspection: TiposinspectionService,
    private serviceEstado: EstadoService
  ) { }

  @Input() inspeccion: any;
  id?: number = 0;
  estadoId?: number;
  comentarios?: string;
  tipoInspeccionId?: number;


  ngOnInit() {

    this.id = this.inspeccion.id
    this.estadoId = this.inspeccion.estadoId
    this.comentarios = this.inspeccion.comentarios
    this.tipoInspeccionId = this.inspeccion.tipoInspeccionId

    this.InspectionEstadoList$ = this.serviceEstado.getEstado();

    this.InspectionList$ = this.serviceInspection.getInspection();

    this.InspectionTypeList$ = this.serviceTypeInspection.getInspectionType();
    
  }


  agregar() {
    var inspection = {
      estadoId: this.estadoId,
      comentarios: this.comentarios,
      tipoInspeccionId: this.tipoInspeccionId
    }

    console.log(inspection);
    

    this.serviceInspection.addInspection(inspection).subscribe(res => {

        // var closeModal = document.getElementById('add-edit-modal-close');
        // if (closeModal) {
        //   closeModal.click();
        // }
        // var showAddSuccess = document.getElementById('add-success-alert');
        // if (showAddSuccess) {
        //   showAddSuccess.style.display = 'block';
        // }
        // setTimeout(function () {
        //   if (showAddSuccess) {
        //     showAddSuccess.style.display = 'none';
        //   }
        // }, 2000)
      })
  }

  update() {
    var inspection = {
      id: this.id,
      estadoId: this.estadoId,
      comentarios: this.comentarios,
      tipoInspeccionId: this.tipoInspeccionId
    }

    // console.log(inspection.id);
    // console.log(inspection.estadoId);
    // console.log(inspection.comentarios);
    // console.log(inspection.tipoInspeccionId);
    
    var a: any = inspection.id;

    this.serviceInspection.updateInspection(a, inspection).subscribe(res => {
        // var closeModal = document.getElementById('add-edit-modal-close');
        // if (closeModal) {
        //   closeModal.click();
        // }
        // var showUpdateSuccess = document.getElementById('update-success-alert');
        // if (showUpdateSuccess) {
        //   showUpdateSuccess.style.display = 'block';
        // }
        // setTimeout(function () {
        //   if (showUpdateSuccess) {
        //     showUpdateSuccess.style.display = 'none';
        //     //location.reload();
        //   }
        // }, 2000)
    })
  }

}
