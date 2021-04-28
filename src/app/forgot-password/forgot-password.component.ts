import { Component, OnInit } from '@angular/core';
import { AuthhhService } from '../shared/services/authhh.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public ngAuthService: AuthhhService) { }

  ngOnInit(): void {
  }

}
