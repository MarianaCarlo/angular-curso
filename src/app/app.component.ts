import { Component, OnInit } from '@angular/core';

import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';


ngOnInit() {
  //Ejemplo 1
  //observable, array = youtube
  const array = from([1,2,3,4,5,6]);
  array.subscribe(s => console.log('item: ', s)) 

  //Ejemplo 2
  //movimiento del mouse
  const aux = fromEvent(document, 'mousemove');
  aux.subscribe(s => console.log('event: ', s.clientX + '.s ' + s.clientY));


}

}
