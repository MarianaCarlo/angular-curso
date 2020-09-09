import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './../../shared/services/product.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductService
  ],
  exports: [RouterModule]
})
export class HomeModule { }
