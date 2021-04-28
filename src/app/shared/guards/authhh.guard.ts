import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthhhService } from '../services/authhh.service';


@Injectable({
  providedIn: 'root'
})
export class AuthhhGuard implements CanActivate {

  constructor(
    public ngAuthService: AuthhhService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.ngAuthService.isLoggedIn !== true) {
        this.router.navigate(['sign-in'])
      }
      return true;
  }

}
