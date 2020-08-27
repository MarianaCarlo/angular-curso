import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): any[] {
    return [
      {
        description: 'abs',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'salteñas'
      },
      {
        description: 'abs',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 23,
        title: 'hamburguesas'
      },
      {
        description: 'abs',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 50,
        title: 'pizzas'
      },
      {
        description: 'abs',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 15,
        title: 'refrescos'
      }
    ];
  }
}
