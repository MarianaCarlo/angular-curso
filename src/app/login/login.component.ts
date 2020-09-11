import { AuthService } from './../shared/services/auth.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sw = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.verifyLogged()) {
      this.router.navigate(['pages']);
    }
  }


  onLogin(form: any): void{
    console.log('FORM: ', form.value);

    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }
    ).subscribe(
    res => {
      console.log('LOGIN RESPONSE: ', res);
      this.router.navigate(['pages']);

    },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }

  onLogin2(form): void{
    console.log('VARIABLE LOCAL FORM: ', form.value);
    this.router.navigate(['pages']);
  }

}
