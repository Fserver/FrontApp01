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
    private seriveInspection: InspectionService,
    private serviceTypeInspection: TiposinspectionService,
    private serviceEstado: EstadoService
  ) { }

  ngOnInit() {
    this.InspectionList$ = this.seriveInspection.getInspection();
    this.InspectionTypeList$ = this.serviceTypeInspection.getInspectionType();
    this.InspectionEstadoList$ = this.serviceEstado.getEstado();

    this.refreshEstadoList();
    this.refreshInspectionTypeList();
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
