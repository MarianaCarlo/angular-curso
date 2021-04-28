import { Component, OnInit } from '@angular/core';
import { AuthhhService } from '../shared/services/authhh.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public ngAuthService: AuthhhService) { }

  ngOnInit(): void {
  }

}
