import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PedidosyaService {

  constructor(private http: HttpClient) { }

  public getPlates(): Observable<any> {
    return this.http.get('https://pedidosyaa-test.firebaseio.com/products.json');
  }

  public addPlate(plate: any): Observable<any> {
    return this.http.post('https://pedidosyaa-test.firebaseio.com/products.json', plate);
  }

  public updatePlate(id: any, plate: any): Observable<any> {
    return this.http.put(`https://pedidosyaa-test.firebaseio.com/products/${id}.json`, plate);
  }

  public deletePlate(id: any): Observable<any> {
    return this.http.delete(`https://pedidosyaa-test.firebaseio.com/products/${id}.json`);
  }

}

