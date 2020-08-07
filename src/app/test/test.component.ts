import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnChanges, OnInit {

  @Input() age: number;
  @Output() clickAge = new EventEmitter(); 

  //HOMEWORK
  @Input() name: string;
  @Input() age2: number;
  @Input() description: string;
  @Output() clickHomework = new EventEmitter();

  //
  user:string = 'maria';


  constructor() { }

  ngOnChanges() {
    console.log('ON CHANGES');
  }

  ngOnInit(): void {
    console.log('ON INIT');
  }

  onClickSave () {
    this.clickAge.emit('Hiciste click');
  }

  onClickSaveHomework () {
    this.clickHomework.emit({
      'name': this.name,
      'age': this.age2,
      'description': this.description 
    });
  }



}
