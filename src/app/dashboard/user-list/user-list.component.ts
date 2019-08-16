/* Component som visar userList och togglar color */
import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';
/* sätter textColor till 43,41,41, tar emot användare från fetchUsers */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  textColor = 'rgb(43, 41, 41)';
  users;
  @Input() user: string;

  constructor(private usersService: UsersService) {
    this.usersService.fetchUsers().subscribe(r => (this.users = r));
  }

  ngOnInit() {}
  /* Skapar variabel med randomnummer mellan 1-5, switchar resultatet och ändrar variabel textColor till någon av rgb-värdena
  som sedan appliceras med ngStyle på listan som visar userList */
  toggleColors() {
    const randomGenerator: number = Math.floor(Math.random() * 5 + 1);
    switch (randomGenerator) {
      case 1:
        this.textColor = 'rgb(78, 27, 27)';
        break;
      case 2:
        this.textColor = 'rgb(63, 95, 41)';
        break;
      case 3:
        this.textColor = 'rgb(52, 57, 133)';
        break;
      case 4:
        this.textColor = 'rgb(22, 157, 175)';
        break;
      case 5:
        this.textColor = 'rgb(102, 255, 102)';
    }
  }
}
