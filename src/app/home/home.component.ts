import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `

    <h1 [class.red]="myProperty">Home Page</h1>
    <h1 [style.border]="myProperty?'1px solid black':'none'">Heading</h1>

    <button (click)="onClick(10)">Button 2</button>
    
    <button [disabled]="get()">Click</button>
    <input type="text"  [(ngModel)]="myProperty"/>
    <h3>{{myProperty}}</h3>

    `
})
export class HomeComponent {
    //falsy "",false,0,Nan,undefined,null
    private myProperty: string = "Hello angular";

    //no side effects.fast
    private get(): string {
        return "From method";
    }

    private onClick(param) {
        console.log("button clicked", param);
    }
}

// expression, property, event, class, style and two way