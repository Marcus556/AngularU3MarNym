import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUsersComponent } from './dashboard/edit-users/edit-users.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { UserListItemComponent } from './dashboard/user-list/user-list-item/user-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { SingleUserComponent } from './single-user/single-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditUsersComponent,
    UserListComponent,
    UserListItemComponent,
    NavBarComponent,
    LoginComponent,
    SingleUserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
