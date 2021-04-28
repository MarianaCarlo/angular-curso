import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';

import { RegisterService } from '../shared/services/register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  exports: [RouterModule]
})
export class RegisterModule { }
