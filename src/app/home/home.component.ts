import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";

@Component({
    selector: 'app-home',
    template: `
       <h1>Home Page</h1>
       <h1 [show]="showEl">Heading</h1>
        <h1 *if="showEl">IF directive demo</h1>

       <h1 [show]="!showEl">Heading2</h1>
    `
})
export class HomeComponent {

    showEl: boolean = true;

    constructor(private logger: ConsoleLogger) {
        logger.warn("COmponent took a lot of time to load");
    }
}

//ngIf, ngFor, ngSwitch, ngModel, ngClass ngStyle