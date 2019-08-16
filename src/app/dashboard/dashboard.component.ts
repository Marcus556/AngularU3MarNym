/* Dashboard component som håller edit-users och userlist */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userListArray = [
    { user: 'Leanne' },
    { user: 'Ervin' },
    { user: 'Clementine' },
    { user: 'Patricia' }
  ];

  constructor(private authService: AuthService) {}
  /* Kör checkIfLoggedIn() i authService när komponenten laddas */
  ngOnInit() {
    this.authService.checkIfLoggedIn();
  }
  /* Tar emot output från edit-users och pushar in i arrayen userList */
  addUser(inData) {
    this.userListArray.push({ user: inData });
  }
  /* Plockar bort det användare ur arrayen */
  removeUser() {
    this.userListArray.pop();
  }
}
