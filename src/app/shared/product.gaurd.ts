import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { CanActivate, CanDeactivate, Router } from "@angular/router";

@Injectable()
export class ProductGaurd implements CanActivate, CanDeactivate<any> {

    canDeactivate(): boolean {
        return confirm("Are you sure you want to leave unsaved changes");
    }

    constructor(private userSvc: UserService, private router: Router) { }

    canActivate(): boolean {
        console.log("Checking gaurd");
        var isLoggedin = this.userSvc.isLoggedin();

        if (!isLoggedin) {
            this.router.navigate(["/"]);
        }

        return isLoggedin;
    }
}