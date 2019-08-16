import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /* Hämtar users från json-server och skapar observables */
  usersUrl =
    'http://my-json-server.typicode.com/Marcus556/AngularU3MarNym/users/';

  constructor(private http: HttpClient) {}

  public fetchUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  public fetchUserId(id): Observable<any> {
    return this.http.get(this.usersUrl + '/' + id);
  }
}
