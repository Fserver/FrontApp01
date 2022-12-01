import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  readonly url = "https://localhost:5001/api"

  constructor(private httpClient:HttpClient) { }

  //getAll
  getEstado(): Observable<any[]> {
    return this.httpClient.get<any>(this.url + '/estado');
  }

  //getInspectiobyId
  getEstadobyId(id: number): Observable<any[]> {
    return this.httpClient.get<any>(this.url + '/estado' + id);
  }

  //createEstado
  addEstado(data: any) {
    return this.httpClient.post(this.url + '/estado', data);
  }

  //updateEstado
  updateEstado(id: number | string, data: any) {
    return this.httpClient.put(this.url + `/estado/${ id }`, data);
  }
  //delete
  deleteEstado(id: number) {
    return this.httpClient.delete(this.url + `/estado/${ id }`);
  }
}
