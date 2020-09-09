import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get(`${this.url}/products.json`);
  }

  public addProducts(product: any): Observable<any> {
    return this.http.post(`${this.url}/products.json`, product);
  }

  public deleteProducts(id: any): Observable<any> {
    return this.http.delete(`${this.url}/products/${id}.json`);
  }

  public updateProducts(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/products/${id}.json`, product);
  }

}
