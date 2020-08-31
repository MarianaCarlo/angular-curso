import { Component, OnInit, HostListener } from '@angular/core';

import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'curso-angular';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  name = 'mariana';
  lastName = 'carlo';

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
  ];

  ngOnInit() {

  }


}
