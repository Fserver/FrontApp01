import { Component } from '@angular/core';
import { Observable } from 'rxjs';


import { EstadoService } from 'src/app/services/estado/estado.service';
import { InspectionService } from 'src/app/services/inspection/inspection.service';
import { TiposinspectionService } from 'src/app/services/tiposinspection/tiposinspection.service';


@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent {

  InspectionList$!: Observable<any[]>
  InspectionTypeList$!: Observable<any[]>
  InspectionEstadoList$!: Observable<any[]>

  InspectionTypeList: any = [];
  EstadoList: any = [];

  InspectionTypeMap: Map<number, string> = new Map();
  EstadoMap: Map<number, string> = new Map();


  constructor(
    private serviceInspection: InspectionService,
    private serviceTypeInspection: TiposinspectionService,
    private serviceEstado: EstadoService
  ) { }

  ngOnInit() {
    this.InspectionList$ = this.serviceInspection.getInspection();
    this.InspectionTypeList$ = this.serviceTypeInspection.getInspectionType();
    this.InspectionEstadoList$ = this.serviceEstado.getEstado();

    this.refreshEstadoList();
    this.refreshInspectionTypeList();
  }

  title: string = "";
  activateaddeditcomponnetinspection: boolean = false;
  inspectiona: any;

  modalAdd() {
    this.inspectiona = {
      id: 0,
      estadoId: null,
      comentarios: null,
      tipoInspeccionId: null
    }
    this.title = 'Add Inspection';
    this.activateaddeditcomponnetinspection = true;

  }

  delete(item: any) {
    if (confirm(`Are you sure to delete this record?${item.id}`)) {
      this.serviceInspection.deleteInspetion(item.id).subscribe(res => {
        var closeModal = document.getElementById('add-edit-modal-close');
        if (closeModal) {
          closeModal.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = 'none';
            location.reload();
          }
        }, 4000)
      })
    }
  }

  modalEdit(item: any) {
    this.serviceInspection = item;
    this.title = 'Edit Inspection';
    this.activateaddeditcomponnetinspection = true
  }

  modalclose(): void {
    this.activateaddeditcomponnetinspection = false;
    // this.InspectionList$ = this.serviceInspection.getInspection();
  }

  refreshInspectionTypeList() {
    this.serviceTypeInspection.getInspectionType().subscribe(data => {
      this.InspectionTypeList = data;

      for (let i = 0; i < data.length; i++) {
        this.InspectionTypeMap.set(
          this.InspectionTypeList[i].id,
          this.InspectionTypeList[i].nombre
        );
      }
    });
  }

  refreshEstadoList() {
    this.serviceEstado.getEstado().subscribe(data => {
      this.EstadoList = data;

      for (let i = 0; i < data.length; i++) {
        this.EstadoMap.set(
          this.EstadoList[i].id,
          this.EstadoList[i].opcionEstado
        );
      }
    });
  }

}