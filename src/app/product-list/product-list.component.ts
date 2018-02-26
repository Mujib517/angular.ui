import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-product-list',
    template: `<h1>Product List</h1>
    <div class="col-md-6">
        <div *ngFor="let product of products" class="well">
            <h3>{{product.brand | uppercase}}  {{product.model | lowercase}}</h3>
            <div>{{product.price | currency}}</div>
            <div>InStock: <input [disabled]="true" type="checkbox" [checked]="product.inStock"/>
            <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm'}}</div>
            <div>{{product.lastUpdated | time}}</div>
            <hr/>
        </div>
    </div>
    `
})
export class ProductListComponent {
    products;

    constructor(private http: HttpClient) {
        this.http.get("https://rest-node-api.herokuapp.com/api/products")
        .subscribe(
            (response)=>this.products=response["data"],
            (err)=>console.log(err)
        )
    }
}
//pipes : uppercase lowerccase titlecase currency date json async