import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposinspectionService {

  readonly url = "https://localhost:5001/api"

  constructor(private httpClient:HttpClient) { }

  //getAll
  getInspectionType(): Observable<any[]> {
    return this.httpClient.get<any>(this.url + '/tipoinspeccion');
  }

  //getInspectiobyId
  getInspectionTypebyId(id: number): Observable<any[]> {
    return this.httpClient.get<any>(this.url + '/tipoinspeccion' + id);
  }

  //createInspection
  addInspectionType(data: any) {
    return this.httpClient.post(this.url + '/tipoinspeccion', data);
  }

  //updateInspection
  updateInspectionType(id: number | string, data: any) {
    return this.httpClient.put(this.url + `/tipoinspeccion/${ id }`, data);
  }
  //delete
  deleteInspetionType(id: number) {
    return this.httpClient.delete(this.url + `/tipoinspeccion/${ id }`);
  }


}
