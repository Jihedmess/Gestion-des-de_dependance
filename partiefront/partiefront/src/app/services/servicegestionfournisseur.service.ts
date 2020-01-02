import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicegestionfournisseurService {

  private baseUrlfindById = 'http://localhost:9090/fournisseur/findById';
  private baseUrlfindAll = 'http://localhost:9090/fournisseur/findAll';
  private baseUrlUpdateCentreInteret = 'http://localhost:9090/fournisseur/updateFournisseur';
  private baseUrlDeleteById = 'http://localhost:9090/fournisseur/deleteById';
  private baseUrladd = 'http://localhost:9090/fournisseur/add'; 


  constructor(private http: HttpClient) { }

  getFournisseur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlfindById}/${id}`);
  }

  createFournisseur(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrladd}`, employee);
  }

  updateFournisseur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlUpdateCentreInteret}`, value);
  }

  deleteFournisseur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlDeleteById}/${id}`, { responseType: 'text' });
  }

  getFournisseursList(): Observable<any> {
    return this.http.get(`${this.baseUrlfindAll}`);
  }
}
