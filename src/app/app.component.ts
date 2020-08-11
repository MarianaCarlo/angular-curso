import { Component, OnInit } from '@angular/core';

import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  name = 'mariana';
  sw = true;
  aux = 3;
  persons = ['marco','juan','jose','lupe'];

ngOnInit() {
  
}

saveClickChild(event) {
  console.log('Event Child: ', event);
}

saveClickChildHomework(event){
  console.log('Event: ', event);
}

changeName() {
  this.name = 'juan';
}

}
