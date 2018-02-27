import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <h3>{{product.brand | uppercase}}  {{product.model | lowercase}}</h3>
    <div>{{product.price | currency}}</div>
    <div>InStock: <input [disabled]="true" type="checkbox" [checked]="product.inStock"/>
    <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm'}}</div>
    <div>{{product.lastUpdated | time}}</div>
  `
})
export class ProductComponent {
  @Input()
  product;
}