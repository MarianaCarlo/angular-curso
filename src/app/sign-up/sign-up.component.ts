import { Component, OnInit } from '@angular/core';
import { AuthhhService } from '../shared/services/authhh.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public ngAuthService: AuthhhService) { }

  ngOnInit(): void {
  }

}
