import { Component } from '@angular/core'; //es6 module

@Component({
    selector: 'app-root', //snake casing
    template: `<app-product-list></app-product-list> {{'02-20-2018' | time}}  `
})
export class AppComponent {

}
