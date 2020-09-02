import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './../../services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    ProductService
  ]
})
export class AdminModule { }
