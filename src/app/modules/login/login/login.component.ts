import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
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
      this.router.navigate(['admin']);

    },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }
}
