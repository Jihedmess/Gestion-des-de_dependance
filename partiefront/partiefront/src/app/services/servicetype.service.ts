import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicetypeService {

  private baseUrlfindById = 'http://localhost:9090/type/findById';
  private baseUrlfindAll = 'http://localhost:9090/type/findAll';
  private baseUrlUpdateCentreInteret = 'http://localhost:9090/type/updateType';
  private baseUrlDeleteById = 'http://localhost:9090/type/deleteById';
  private baseUrladd = 'http://localhost:9090/type/add'; 

  constructor(private http: HttpClient) { }

  getType(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlfindById}/${id}`);
  }

  createType(type: Type): Observable<Object> {
    return this.http.post(`${this.baseUrladd}`, type);
  }

  updateType(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlUpdateCentreInteret}`, value);
  }

  deleteType(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlDeleteById}/${id}`, { responseType: 'text' });
  }

  getTypesList(): Observable<any> {
    return this.http.get(`${this.baseUrlfindAll}`);
  }
}

export class Type {

  idType: number;
  designation: string;
  
}