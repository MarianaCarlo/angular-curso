import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'superticket',
  templateUrl: './superticket.component.html',
  styleUrls: ['./superticket.component.css']
})
export class SuperticketComponent implements OnInit {

  @Input() nombre:string;
  @Input() stock:number;
  @Input() habilitado:boolean;
  

  constructor() { }

  ngOnInit() {
  }

}