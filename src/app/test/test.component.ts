import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() age: number;
  @Output() clickAge = new EventEmitter(); 

  //HOMEWORK
  @Input() name: string;
  @Input() age2: number;
  @Input() description: string;

  @Output() clickHomework = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
