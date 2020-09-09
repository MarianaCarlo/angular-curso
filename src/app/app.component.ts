import { Component, OnInit, HostListener } from '@angular/core';

import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  title = 'curso-angular';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  name = 'mariana';
  lastName = 'carlo';

  ngOnInit(): void {

  }


}
