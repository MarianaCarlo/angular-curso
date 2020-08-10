import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div>
  <p>TEST1</p>
  <input type="text" [(ngModel)]="name">

  <P>VALOR VAR NAME: {{name}}</P>
  </div>
  `
  
})
export class TestComponent implements OnInit, OnChanges  ,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name:string = 'mariana';
  constructor() { }

  ngOnInit(): void {
    console.log('ON INIT');
  }
  ngOnChanges(){
    console.log('ON CHANGES');
  }
  ngDoCheck(){
    console.log('DO CHECK');
  }
  ngAfterContentInit(){
    console.log('AFTER CONTENT INIT');
  }
  ngAfterContentChecked(){
    console.log('AFTER CONTENT CHECKED');
  }
  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
  }
  ngAfterViewChecked(){
    console.log('AFTER VIEW CHECKED');
  }
  ngOnDestroy(){
    console.log('ON DESTROY');
  }
}
