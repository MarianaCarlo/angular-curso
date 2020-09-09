import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { NgElseDirective } from './../shared/directives/ng-else.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthService } from './../shared/services/auth.service';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService
  ],
  exports: [RouterModule]
})
export class LoginModule { }
