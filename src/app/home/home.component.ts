import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";

@Component({
    selector: 'app-home',
    template: `
       <h1>Home Page</h1>
    `
})
export class HomeComponent {
    constructor(private logger: ConsoleLogger) {
        logger.warn("COmponent took a lot of time to load");
    }
}

//ngIf, ngFor, ngSwitch, ngModel, ngClass ngStyle