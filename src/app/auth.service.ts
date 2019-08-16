import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from './models/admin-login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/* skapar variabler loggeduser och loggedon */
export class AuthService {
  loggedUser: string;
  loggedOn: boolean;
  wrongPass: boolean;
  adminLogin = new AdminLogin('', '');
  /* Våra admins */
  public admins: AdminFull[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      password: '1234567890'
    },
    {
      firstName: 'Kylie',
      lastName: 'Johnson',
      email: 'kylie.johnson@email.com',
      password: '0987654321'
    },
    {
      firstName: 'Marcus',
      lastName: 'Nyman',
      email: 'Marcus@email.com',
      password: 'password'
    }
  ];

  constructor(private router: Router) {}
  /* tar emot variabler från logn comp och läggar i localStorage och sätter loggeduser efter variabel b, dvs loginnamn. */
  login(a, b) {
    this.adminLogin.email = a;
    this.adminLogin.password = b;
    for (let i = 0; i < this.admins.length; i++) {
      if (
        this.adminLogin.email === this.admins[i].email &&
        this.adminLogin.password === this.admins[i].password
      ) {
        this.loggedUser = 'admin';
        localStorage.setItem('user', this.adminLogin.email);
        this.router.navigate(['/dashboard']);
      } else {
      }
    }
    if (this.loggedUser === undefined) {
      alert('wrong pass!');
    } else {
    }
  }

  /*
  localStorage.setItem(a, b);
  this.loggedUser = b;
  */
  /* Plockar bort "user" från local storage */
  logout() {
    localStorage.removeItem('user');
  }
  /* kollar om det finns någon user loggad i local storage, om det gör det sätts loggedOn till true, annars till false */
  checkIfLoggedIn() {
    if (localStorage.getItem('user') == null) {
      this.loggedOn = false;
    } else {
      this.loggedOn = true;
    }
  }
}
