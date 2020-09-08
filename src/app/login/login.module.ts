import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { NgElseDirective } from './../directives/ng-else.directive';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './login/test/test.component';
import { AuthService } from '../services/auth.service.';



@NgModule({
  declarations: [
    LoginComponent,
    TestComponent,
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
    LoginRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
