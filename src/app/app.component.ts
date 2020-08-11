import { Component, OnInit } from '@angular/core';

import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  persons = [
    {
      name: 'mariana',
      lastName: 'carlo',
      age: 20,
      enable: true
    },
    {
      name: 'juan',
      lastName: 'vasquez',
      age: 24,
      enable: true
    },
    {
      name: 'rodrigo',
      lastName: 'perez',
      age: 21,
      enable: false
    },
    {
      name: 'andres',
      lastName: 'castillo',
      age: 25,
      enable: false
    }
  ]

ngOnInit() {
  
}



}
