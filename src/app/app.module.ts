import { reducers } from './core';
import { MatSliderModule } from '@angular/material/slider';
import { environment } from './../environments/environment';
import { metaReducers } from './core/meta';
import { AuthService } from './shared/services/auth.service';
import { AuthhhService } from './shared/services/authhh.service';

import { AuthGuard } from './shared/guards/auth.guard';
import { AuthhhGuard } from './shared/guards/authhh.guard';

import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { Routes, RouterModule } from '@angular/router';
import { NgFocusDirective } from './shared/directives/ng-focus.directive';
import { NgColorDirective } from './shared/directives/ng-color.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterService } from './shared/services/register.service';

const routes: Routes = [
  /*
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthhhGuard] },
  */
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NgColorDirective,
    NgFocusDirective,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSliderModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'Angular Course', logOnly: environment.production}),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthhhService,
    RegisterService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
