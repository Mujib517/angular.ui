import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
    <div *ngIf="show">
        ...
        ...
        <h1 >Home Page</h1>
    </div>


    <div [ngSwitch]="priority">
        <h1 *ngSwitchCase="'high'">High priority Task</h1>
        <h1 *ngSwitchCase="'medium'">Medium priority Task</h1>
        <h1 *ngSwitchCase="'low'">Low priority Task</h1>
        <h1 *ngSwitchDefault>Very Low Priority Task</h1>
    </div>

    <button (click)="toggle()">Toggle</button>
    `
})
export class HomeComponent {
    show: boolean = true;
    priority: string = "very low";
   

    toggle(): void {
        if (this.show) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
}

//ngIf, ngFor, ngSwitch, ngModel, ngClass ngStyle