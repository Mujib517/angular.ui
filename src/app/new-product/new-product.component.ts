import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

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


   <div class="col-md-5">
      <div class="form-group">
      <select class="form-control" [(ngModel)]="product.brand">
        <option>Apple</option>
        <option>Sony</option>
        <option>Samsung</option>
        <option>Xiomi</option>
      </select>
         
      </div>
      <div class="form-group">
          <input type="text" placeholder="Model" class="form-control" [(ngModel)]="product.model"/>
      </div>
      <div class="form-group">
          <input type="text" placeholder="Price" class="form-control" [(ngModel)]="product.price"/>
      </div>
      <div class="form-group">
          InStock: <input type="checkbox" [(ngModel)]="product.inStock"/>
      </div>
      <div class="form-group">
         <button class="btn btn-success" (click)="onSave()">Save Product</button>
      </div>
   </div>


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

