import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from './components/client1/client1.component';
import { Client2Component } from './components/client2/client2.component';



@NgModule({
  declarations: [
    Client1Component,
    Client2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Client1Component,
    Client2Component
  ]
})
export class ClientModule { }
