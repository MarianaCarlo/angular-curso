import { AddProduct } from './store/home.actions';
import { ProductService } from './../../shared/services/product.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // damy data
  products = [];
  productSubs: Subscription;

  constructor(private productService: ProductService, private store: Store<any>) { }

  ngOnInit(): void {
    this.productSubs = this.productService.getProducts().subscribe( res => {
      // {key: 1}, {key: 2}.{key: 3}
      // Object entries convierte JSON en un array especial como: [ [key, 1], [key, 2], [key, 3]]
        console.log('RESPUESTA: ', Object.entries(res));
        Object.entries(res).map(p => this.products.push(p[1]));
      }
    );

  }

  ngOnDestroy(): void{
    // tslint:disable-next-line: no-unused-expression
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({product: {productInfo: product}}));
  }

}
