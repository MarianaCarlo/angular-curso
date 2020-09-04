import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosyaRoutingModule } from './pedidosya-routing.module';
import { PedidosyaComponent } from './pedidosya/pedidosya.component';


@NgModule({
  declarations: [PedidosyaComponent],
  imports: [
    CommonModule,
    PedidosyaRoutingModule
  ]
})
export class PedidosyaModule { }
