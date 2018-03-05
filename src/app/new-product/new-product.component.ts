import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
//required, minlen, maxlen, pattern
//template driven
// reactive forms
@Component({
  selector: 'app-new-product',
  template: `
   <h1>Add New Product</h1>

   <div *ngIf="success" class="alert alert-success">
      Saved Successfully
   </div>

   <div *ngIf="error" class="alert alert-danger">
      Failed to save please try again later
   </div>

  <form novalidate #frm="ngForm">
   <div class="col-md-5">
      <div class="form-group">
      <select class="form-control" required="true" [(ngModel)]="product.brand" name="brand">
        <option>Apple</option>
        <option>Sony</option>
        <option>Samsung</option>
        <option>Xiomi</option>
      </select>
         
      </div>
      <div class="form-group">
          <input type="text" placeholder="Model"  minlength="3" maxlength="10"
          class="form-control" required="true" name="model" [(ngModel)]="product.model"/>
      </div>
      <div class="form-group">
          <input type="text" placeholder="Price" 
          class="form-control" required="true" name="price" [(ngModel)]="product.price" pattern="[0-9]{3,4}"/>
      </div>
      <div class="form-group">
          InStock: <input type="checkbox" [(ngModel)]="product.inStock" name="inStock"/>
      </div>
      <div class="form-group">
         <button [disabled]="frm.invalid" class="btn btn-success" (click)="onSave()">Save Product</button>
      </div>
   </div>
<form>

  `
})
export class NewProductComponent {

  product: any = {};
  success: boolean = false;
  error: boolean = false;

  constructor(private svc: ProductService) { }

  onSave() {
    this.svc.save(this.product)
      .subscribe(
      (response) => {
        console.log("Saved Successfully");
        this.product = {};
        this.success = true;
      },
      (err) => this.error = true
      )
  }
}

