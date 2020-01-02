import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CentreInteret {
  private  idCI : string;
    private  designationCI : string;

    constructor(){}
}

@Injectable({
  providedIn: 'root'
})
export class ServicegestioncentreinteretService {

   private baseUrlfindById = 'http://localhost:9090/centre/findById';
   private baseUrlfindAll = 'http://localhost:9090/centre/findAll';
   private baseUrlUpdateCentreInteret = 'http://localhost:9090/centre/updateCentreInteret';
   private baseUrlDeleteById = 'http://localhost:9090/centre/deleteById';
   private baseUrladd = 'http://localhost:9090/centre/add'; 

  constructor(private http: HttpClient) { }

  getCentreInteret(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlfindById}/${id}`);
  }

  createCentreInteret(centreinteret: Object): Observable<Object> {
    return this.http.post(`${this.baseUrladd}`, centreinteret);
  }

  updateCentreInteret(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlUpdateCentreInteret}`, value);
  }

  deleteCentreInteret(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlDeleteById}/${id}`, { responseType: 'text' });
  }

  getCentreInteretList() {
    return this.http.get<CentreInteret>(`${this.baseUrlfindAll}`);
  }
}
