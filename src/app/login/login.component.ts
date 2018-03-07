import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  template: `
  <h1>Login</h1>
  <div class="col-md-5">
    <div class="form-group">
      <input type="text" placeholder="Username" class="form-control" [(ngModel)]="user.username"/>
    </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="form-control" [(ngModel)]="user.password"/>
    </div>
    <div class="form-group">
      <button class="btn btn-success" (click)="onLogin()">Login</button>
    </div>
    
  </div>
  `
})
export class LoginComponent {
  user: any = {};

  constructor(private userSvc: UserService) { }

  onLogin() {
    this.userSvc.login(this.user)
      .subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
      )
  }
}
