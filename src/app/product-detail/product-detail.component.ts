import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  template: `
   <mat-spinner *ngIf="loading"></mat-spinner>
  
  <div *ngIf="!loading" >
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
    <div>
        <ul class="nav-tabs nav">
          <li routerLinkActive="active"><a routerLink="specs">Specs</a></li>
          <li routerLinkActive="active"><a routerLink="reviews">Reviews</a></li>
        </ul>
        <div>
          <router-outlet></router-outlet>
        </div>
    </div>
   </div>
  `,
  styles: []
})
export class ProductDetailComponent {

  product: Product;
  loading: boolean = false;
  
  constructor(private productSvc: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    let id = this.route.snapshot.params.id;

    this.productSvc.getById(id)
      .subscribe(
      (response) => {
        this.productSvc.reviews = response["reviews"];
        this.product = response;
        this.loading = false;
      },
      (err) => console.log(err)
      );
  }
}
