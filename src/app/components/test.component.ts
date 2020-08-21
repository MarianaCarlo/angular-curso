import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: "person",
  template: `
  <div>
  <p>TEST1</p>
  <p>NAME: {{name}}</p>

  <p>LAST NAME: {{lastName}}</p>
  </div>
  `

})
export class TestComponent implements OnInit, OnChanges {

  //@Input() name: string;
  intermediate: string;

  @Input()
    //cada vez que quiera utilizarlo
    get name() {
      return this.intermediate;
    }
    //cada vez que se cambie
    set name(name:string) {
      this.intermediate = 'aaaadasdaaaasafweaa' + name;
    }

  @Input() lastName: string;


  constructor() { }

  ngOnInit() {
    console.log('ON INIT', this.name);
  }

  ngOnChanges(changes: SimpleChanges){
    /*if (changes && changes.lastName && changes.lastName.currentValue){
      console.log('ON CHANGES', changes.lastName.currentValue);
      const aux = 'aaa' + changes.lastName.currentValue;
      this.lastName = aux;
    }*/
  }

}



/*
class persona {
  name: string;
  age:number;

  constructor(){

  }

  getName(){
    return name;
  }
  setName(name:string){
    this.name = name;
  }

}
*/
