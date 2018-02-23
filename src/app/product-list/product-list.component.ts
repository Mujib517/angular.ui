import { Component } from '@angular/core';


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
    products: any[];

    constructor() {
        this.products = [{ id: 1, brand: "Nokia", model: "N8", price: 100, inStock: true, lastUpdated: Date.now() },
        { id: 2, brand: "Nokia", model: "N9", price: 400, inStock: false, lastUpdated: Date.now() },
        { id: 3, brand: "Samsung", model: "S8", price: 800, inStock: false, lastUpdated: Date.now() }];
    }
}
//pipes : uppercase lowerccase titlecase currency date json async