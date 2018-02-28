import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
   <div class="panel panel-primary">
      <div class="panel-heading">
        {{product?.brand}} {{product?.model}}
      </div>
      <div class="panel-body">
        InStock: <input type="checkbox" [checked]="product?.inStock" disabled="true"/>
        <div>{{product?.price|currency}}</div>
      </div>
      <div class="panel-footer">
          {{product?.lastUpdated | time}}
      </div>
   </div>
  `,
  styles: []
})
export class ProductDetailComponent {

  product: any;

  constructor(private productSvc: ProductService, private route: ActivatedRoute) {
    let id = this.route.snapshot.params.id;

    productSvc.getById(id)
      .subscribe(
      (response) => this.product = response,
      (err) => console.log(err)
      )
  }
}
