import { Component, OnInit, HostListener, DoCheck } from '@angular/core';

import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  title = 'curso-angular';

  name = 'mariana';
  lastName = 'carlo';

  tickets = [
    {
      nombre : "bad bunny", 
      stock:1, 
      habilitado : true, 
      tipo : "internacional"
    },
    {
      nombre : "karkas", 
      stock:2, 
      habilitado : true, 
      tipo : "nacional"
    },
    {
      nombre : "ozuna", 
      stock: 0, 
      habilitado : false, 
      tipo : "internacional"
    },
    {
      nombre : "PK2", 
      stock: 45, 
      habilitado : true, 
      tipo : "nacional"
    },
    {
      nombre : "Octavia", 
      stock: 20, 
      habilitado : true, 
      tipo : "nacional"
    },
    {
      nombre : "julieta venegas", 
      stock: 1, 
      habilitado : true, 
      tipo : "internacional"
    },
    {
      nombre : "rumba 7", 
      stock: 4, 
      habilitado : true, 
      tipo : "nacional"
    },
    {
      nombre : "metalica", 
      stock: 0, 
      habilitado : false, 
      tipo : "internacional"
    },
    {
      nombre : "alcoholica", 
      stock: 33, 
      habilitado : true, 
      tipo : "nacional"
    },
    {
      nombre : "juanes", 
      stock: 0, 
      habilitado : false, 
      tipo : "internacional"
    }
  ]

nacional = this.tickets.filter(s => s.tipo === 'nacional');
internacional = this.tickets.filter(s => s.tipo === 'internacional');

//totalStock = this.tickets.reduce((a, v) => a + v.stock);



totalStock(){
  let aux= 0;
  for(let i = 0; i<this.tickets.length; i++){
    aux = aux + this.tickets[i].stock;
  }
  return aux;
}

ngOnInit() {
  console.log('PURA: ');
}

ngDoCheck() {
  
}


}
