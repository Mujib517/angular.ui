import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-users',
    template: `
        <div class="col-md-5">
            <div class="well" *ngFor="let user of users">
                <h3>{{user.login}}</h3>
                <img class="img img-circle" [src]="user.avatar_url" 
                width="100" height="100"/>
            </div>
        </div>
    `
})
export class UsersComponent {
    users: any;

    constructor(private http: HttpClient) {
        http.get("https://api.github.com/users")
            .subscribe(
            response => {
                console.log(response);
                this.users = response;
            },
            err => console.log(err)
            );
    }
}