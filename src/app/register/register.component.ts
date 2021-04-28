import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from '../shared/services/register.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  userAddSubs: Subscription;

  constructor(private formBuilder: FormBuilder, public register_service: RegisterService, public users_service: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: '',
      password: '',
      cellphone: '',
      address: '',
    });
  }

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.userForm.value);

    this.userAddSubs = this.users_service.addUsers({
      ...this.userForm.value
    }
  ).subscribe(res => {
    console.log('RSPUESTA: ', res);
  },
    err => {
      console.log('ERROR DE SERVIDOR');
    }
  );
  }


}
