/* Component som hanterar arrayen userList i dashboard */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  userInput: string = '';

  constructor() { }

  ngOnInit() {
  }
  /* Output userOutput och kör addUser som skickar value från input-field till dashboarden */
  @Output() userOutput = new EventEmitter();
  addUser() {
    this.userOutput.emit(this.userInput);
  }
/* Output som tar bort användare ur arrayen i dashboarden */
  @Output() userOutputRemove = new EventEmitter();
  removeUser() {
    this.userOutputRemove.emit();
  }

}
