import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PedidosyaService } from './../services/pedidosya.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosyaRoutingModule } from './pedidosya-routing.module';
import { PedidosyaComponent } from './pedidosya/pedidosya.component';


@NgModule({
  declarations: [PedidosyaComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PedidosyaRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [
    PedidosyaService
  ]
})
export class PedidosyaModule { }
