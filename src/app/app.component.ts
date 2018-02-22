import { Component } from '@angular/core'; //es6 module

@Component({
    selector: 'app-root', //snake casing
    template: '<app-home></app-home><app-about><app-about>'
})
export class AppComponent {

}
