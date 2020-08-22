import { Component, OnInit, HostListener } from '@angular/core';

import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 @HostListener('window: resize', ['$event']) onResize(event) {
    console.log('WINDOW RESIZE', event.target.innerWidth);
  }

  title = 'curso-angular';
  numbers = [1,2,3,4,5,6,7,8,9,10];

  name = 'mariana';
  lastName = 'carlo';

  persons = [
    {
      name: 'juan',
      lastName: 'vasquez',
      age: 24,
      enable: true
    },
    {
      name: 'andres',
      lastName: 'castillo',
      age: 25,
      enable: false
    }
  ]


auxNumber: number = 3;
auxExponent: number = 2;

ngOnInit() {

}


}
