import { Shared3Pipe } from './components/shared3/shared3.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1Component } from './components/shared1/shared1.component';
import { Shared2Directive } from './components/shared2/shared2.directive';



@NgModule({
  declarations: [
    Shared1Component,
    Shared2Directive,
    Shared3Pipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Shared1Component,
    Shared2Directive,
    Shared3Pipe
  ]
})
export class SharedModule { }
