import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  readonly url = "https://localhost:5001/api"

  constructor(private httpClient: HttpClient) { }

  //getAll
  getInspection(): Observable<any[]> {
    return this.httpClient.get<any>(this.url + '/inspeccion');
  }

  //getInspectiobyId
  getInspectionbyId(id: number): Observable<any[]> {
    return this.httpClient.get<any>(this.url + '/inspeccion' + id);
  }

  //createInspection
  addInspection(data: any) {
    return this.httpClient.post(this.url + '/inspeccion', data);
  }

  //updateInspection
  updateInspection(id: number | string, data: any) {
    return this.httpClient.put(this.url + `/inspeccion/${ id }`, data);
  }
  //delete
  deleteInspetion(id: number) {
    return this.httpClient.delete(this.url + `/inspeccion/${ id }`);
  }


}
