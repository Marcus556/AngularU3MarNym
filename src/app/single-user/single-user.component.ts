import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  users;
  id;

  /* prenumerera på aktiv route och lägger id:t i id. kör sedan fetchUserId med id som parameter och skapar users. */
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.usersService.fetchUserId(this.id).subscribe(r => (this.users = r));
  }
}
