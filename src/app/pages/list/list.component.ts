import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './../../shared/services/user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  users = [];
  productSubs: Subscription;
  homeSubs: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.productSubs = this.userService.getUsers().subscribe( res => {
      // {key: 1}, {key: 2}.{key: 3}
      // Object entries convierte JSON en un array especial como: [ [key, 1], [key, 2], [key, 3]]
        console.log('RESPUESTA: ', Object.entries(res));
        Object.entries(res).map(p => this.users.push(p[1]));
      }
    );

  }

}
