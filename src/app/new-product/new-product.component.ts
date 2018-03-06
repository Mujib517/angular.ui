import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { Product } from '../shared/models/product.model';
//required, minlen, maxlen, pattern
//template driven
// reactive forms
@Component({
  selector: 'app-new-product',
  template: `
   <h1>Add New Product</h1>


   <table class="table table-bordered">
    <tr>
      <td>Element</td>
      <td>Errors</td>
      <td>Invalid</td>
      <td>Valid</td>
      <td>Dirty</td>
      <td>Pristine</td>
      <td>Touched</td>
    </tr>
    <tr>
      <td>Model</td>
      <td>{{model.errors | json}}</td>
      <td>{{model.invalid }}</td>
      <td>{{model.valid }}</td>
      <td>{{model.dirty }}</td>
      <td>{{model.pristine }}</td>
      <td>{{model.touched }}</td>
    </tr>
   </table>

   <div *ngIf="success" class="alert alert-success">
      Saved Successfully
   </div>

   <div *ngIf="error" class="alert alert-danger">
      Failed to save please try again later
   </div>

  <form novalidate #frm="ngForm">
   <div class="col-md-5">
      <div class="form-group">
      <select class="form-control" #brand="ngModel" required="true" [(ngModel)]="product.brand" name="brand">
        <option>Apple</option>
        <option>Sony</option>
        <option>Samsung</option>
        <option>Xiomi</option>
      </select>
      <span class="text-danger" *ngIf="brand.dirty && brand.invalid">Required</span>
         
      </div>
      <div class="form-group">
          <input type="text" #model="ngModel" placeholder="Model"  minlength="3" maxlength="10"
          class="form-control" required="true" name="model" [(ngModel)]="product.model"/>
          
          <span class="text-danger" *ngIf="model.touched && model.errors?.required">Required</span>
          <span class="text-danger" *ngIf="model.touched && model.errors?.minlength">Min 3 chars</span>
          <span class="text-danger" *ngIf="model.touched && model.errors?.maxlength">Max 10 chars</span>
      </div>
      <div class="form-group">
          <input type="text" placeholder="Price" #price="ngModel" 
          class="form-control" required="true" name="price" [(ngModel)]="product.price" pattern="[0-9]{3,4}"/>
          
          <span class="text-danger" *ngIf="price.touched && price.errors?.required">Required</span>
          <span class="text-danger" *ngIf="price.touched && price.errors?.pattern">Invalid price</span>
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

  product: Product;
  success: boolean = false;
  error: boolean = false;

  constructor(private svc: ProductService, private router: Router) {
    this.product = new Product();
  }

  onSave() {
    this.svc.save(this.product)
      .subscribe(
      (response) => {
        console.log("Saved Successfully");
        this.product = new Product();
        this.success = true;
        this.router.navigate(["/products"]);
      },
      (err) => this.error = true
      )
  }
}

