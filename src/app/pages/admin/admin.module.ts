import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './../../shared/services/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductService
  ],
  exports: [RouterModule]
})
export class AdminModule { }
