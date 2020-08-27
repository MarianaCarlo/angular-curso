import { NgElseDirective } from './../directives/ng-else.directive';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './login/test/test.component';



@NgModule({
  declarations: [LoginComponent, TestComponent, NgElseDirective],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
