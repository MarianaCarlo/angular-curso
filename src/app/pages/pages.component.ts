import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
  }

  public onLogout(): void {
    this.authService.logout();
  }

}
