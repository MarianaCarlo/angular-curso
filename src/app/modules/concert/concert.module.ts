import { ClientModule } from './../client/client.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Concert1Component } from './components/concert1/concert1.component';
import { Concert2Component } from './components/concert2/concert2.component';



@NgModule({
  declarations: [
    Concert1Component,
    Concert2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientModule
  ],
  exports: [
    Concert1Component,
    Concert2Component
  ]
})
export class ConcertModule { }
