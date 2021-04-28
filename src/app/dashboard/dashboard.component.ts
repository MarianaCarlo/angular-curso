import { Component, OnInit } from '@angular/core';
import { AuthhhService } from '../shared/services/authhh.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public ngAuthService: AuthhhService) { }

  ngOnInit(): void {
  }

}
