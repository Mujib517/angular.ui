import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    login(user: any): Observable<any> {
        return this.http.post("https://rest-node-api.herokuapp.com/api/users/signin", user);
    }

    saveToken(token: string): void {
        localStorage.setItem("token", token);
    }

    isLoggedin(): boolean {
        return localStorage.getItem("token") ? true : false;
    }

    logout(): void {
        localStorage.removeItem("token");
    }
}