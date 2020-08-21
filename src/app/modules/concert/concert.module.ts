import { ClientModule } from './../client/client.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';



@NgModule({
  declarations: [
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientModule
  ],
  exports: [
    Component1Component,
    Component2Component
  ]
})
export class ConcertModule { }
