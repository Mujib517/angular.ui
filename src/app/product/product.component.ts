import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  template: `
    <a [routerLink]="'/products/'+product._id"><h3>{{product.brand | uppercase}}  {{product.model | lowercase}}</h3></a>
    <div>{{product.price | currency}}</div>
    <div>InStock: <input [disabled]="true" type="checkbox" [checked]="product.inStock"/>
    <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm'}}</div>
    <div>{{product.lastUpdated | time}}</div>
    <div>
      <button class="btn btn-danger btn-sm" (click)="onDelete(product._id)">Delete</button>
    </div>
  `
})
export class ProductComponent {
  @Input()
  product;

  @Output()
  notify: EventEmitter<any>;

  constructor(private svc: ProductService) {
    this.notify = new EventEmitter<any>();
  }

  onDelete(id: string) {
    this.svc.delete(id)
      .subscribe(
      (response) => {
        this.notify.emit();
      },
      (err) => console.log(err)
      );

  }
}