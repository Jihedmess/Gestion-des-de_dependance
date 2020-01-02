import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicemodepayementService {

  private baseUrlfindById = 'http://localhost:9090/modepayement/findById';
  private baseUrlfindAll = 'http://localhost:9090/modepayement/findAll';
  private baseUrlUpdateCentreInteret = 'http://localhost:9090/modepayement/updateMP';
  private baseUrlDeleteById = 'http://localhost:9090/modepayement/deleteById';
  private baseUrladd = 'http://localhost:9090/modepayement/add'; 

  constructor(private http: HttpClient) { }

  getModePayement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlfindById}/${id}`);
  }

  createModePayement(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrladd}`, employee);
  }

  updateModePayement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlUpdateCentreInteret}`, value);
  }

  deleteModePayement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlDeleteById}/${id}`, { responseType: 'text' });
  }

  getModePayementsList(): Observable<any> {
    return this.http.get(`${this.baseUrlfindAll}`);
  }
}
