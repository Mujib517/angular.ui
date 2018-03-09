import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-home',
    template: `
       <h1>Home Page</h1>
      
       <h1>{{count}}</h1>
       <button (click)="inc()">++</button>
    `
})
export class HomeComponent {

    count: number = 0;

    constructor(private logger: ConsoleLogger, private http: HttpClient) {
        logger.warn("Component took a lot of time to load");
        http.get("https://api.github.com/users")
            .subscribe(
            () => this.count = 1000,
            () => this.count = 100000
            )
        //setInterval(() => this.count++, 1000);
    }

    inc() {
        this.count++;
    }
}

// asynchronous op   events,timers,web svc
//ngIf, ngFor, ngSwitch, ngModel, ngClass ngStyle