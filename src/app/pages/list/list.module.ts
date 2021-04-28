import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {path: '', component: ListComponent}
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListModule { }
