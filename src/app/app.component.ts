//Typescript
//CLI setup
//templates
//components
//Data binding
//Pipes and custom pipes
import { Component } from '@angular/core'; //es6 module

@Component({
    selector: 'app-root', //snake casing
    template: `
    <app-header></app-header>
    
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    
    <app-footer></app-footer>
    
    `
})
export class AppComponent {

}
