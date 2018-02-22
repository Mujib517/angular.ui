import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
    <h1>{{ 1+2 }}</h1>
    <h1>{{ 'Sheldon ' +'Cooper'}}</h1>
    <h1>{{myProperty}}</h1>

    <h2>{{ get() }}</h2>

    {{ myProperty? "Yes":"No"}}

    `
})
export class HomeComponent {
    //falsy "",false,0,Nan,undefined,null
    private myProperty: string = "";

    //no side effects.fast
    private get(): string {
        return "From method";
    }
}

// expression, property, event, class, style and two way