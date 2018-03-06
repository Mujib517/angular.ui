import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  template: `
   <h1>Reactive Form</h1>

   <form novalidate [formGroup]="form">
   <div class="col-md-5">
      <div class="form-group">
      <select class="form-control" formControlName="brand" >
        <option value="">-Select-</option>
        <option>Apple</option>
        <option>Sony</option>
        <option>Samsung</option>
        <option>Xiomi</option>
      </select>
         <span class="text-danger" *ngIf="form.controls.brand.touched && form.controls.brand.errors?.required">Required</span>
      </div>
      <div class="form-group">
          <input type="text" placeholder="Model"  minlength="3" maxlength="10"
          class="form-control" required="true" formControlName="model"/>  
        </div>
      <div class="form-group">
          <input type="text" placeholder="Price"
          class="form-control" required="true" formControlName="price"/>
      </div>
      <div class="form-group">
          InStock: <input type="checkbox" formControlName="inStock"/>
      </div>
      <div class="form-group">
         <button [disabled]="form.invalid" class="btn btn-success" (click)="onSave()">Save Product</button>
      </div>
   </div>
<form>

  `
})
export class ReactFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', []],
      inStock: ['', []]
    });
  }

  onSave() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
    else {
      console.log("Validations are failing");
    }
  }
}
