import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicegestiondepenceService {

   private baseUrlfindById = 'http://localhost:9090/depence/findById';
   private baseUrlfindAll = 'http://localhost:9090/depence/findAll';
   private baseUrlUpdateCentreInteret = 'http://localhost:9090/depence/updateDepence';
   private baseUrlDeleteById = 'http://localhost:9090/depence/deleteById';
   private baseUrladd = 'http://localhost:9090/depence/add'; 
   private baseUrlfiltre = 'http://localhost:9090/depence/findAllbyDate';
   private baseUrlfiltretype = 'http://localhost:9090/depence/findAllbyType';
   private baseUrlfiltrefourniseeur = 'http://localhost:9090/depence/findAllbyFournisseur';
   private baseUrlfiltreMp = 'http://localhost:9090/depence/findAllbyModePaiement';
   private baseUrlfiltreCentreInteret = 'http://localhost:9090/depence/findAllbyCentreInteret';

  constructor(private http: HttpClient) { }

  getDepence(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlfindById}/${id}`);
  }

  createDepence(depence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrladd}`, depence);
  }

  filtre(filtre: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlfiltre}`, filtre);
  }
  filtretype(filtre: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlfiltretype}`, filtre);
  }
  filtreMP(filtre: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlfiltreMp}`, filtre);
  }
  filtreCentreInteret(filtre: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlfiltreCentreInteret}`, filtre);
  }

  filtreFournisseur(filtre: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlfiltrefourniseeur}`, filtre);
  }



  updateDepence(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlUpdateCentreInteret}`, value);
  }

  deleteDepence(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlDeleteById}/${id}`, { responseType: 'text' });
  }

  getDepencesList(): Observable<any> {
    return this.http.get(`${this.baseUrlfindAll}`);
  }
}
