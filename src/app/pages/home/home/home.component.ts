import { ProductService } from './../../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // damy data
  products = [];
  productSubs: Subscription;

  constructor(private productService: ProductService) { }

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
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

}
