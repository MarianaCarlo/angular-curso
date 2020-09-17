import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PedidosyaService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPlates(): Observable<any> {
    return this.http.get(`${this.url}/products.json`);
  }

  public getPlatesById(id: any): Observable<any> {
    return this.http.get(`${this.url}/products.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  }

  public addPlate(plate: any): Observable<any> {
    return this.http.post(`${this.url}/products.json`, plate);
  }

  public updatePlate(id: any, plate: any): Observable<any> {
    return this.http.put(`${this.url}/products/${id}.json`, plate);
  }

  public deletePlate(id: any): Observable<any> {
    return this.http.delete(`${this.url}/products/${id}.json`);
  }

}

