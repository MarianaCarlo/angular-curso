import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    console.log('REQUEST: ', request);
    if (token){
      request = request.clone({
        url: request.url.indexOf('?') > -1 ? `${request.url}&auth=${token}` : `${request.url}?auth=${token}`
      });

    }

     /*if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }*/

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401){
          this.handleError();
        }
        return throwError('Error');
      })
    );
  }

  private handleError(): Observable<any> {
    this.authService.logout();
    return throwError('ERROR 401');
  }

}
