import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // damy data
  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( res => {
      // {key: 1}, {key: 2}.{key: 3}
      // Object entries convierte JSON en un array especial como: [ [key, 1], [key, 2], [key, 3]]
        console.log('RESPUESTA: ', Object.entries(res));
        Object.entries(res).map(p => this.products.push(p[1]));
      }
    );

  }

}
