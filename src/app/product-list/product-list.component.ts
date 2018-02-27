import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-product-list',
    template: `<h1>Product List</h1>
    <div class="col-md-6">
        <div *ngFor="let prod of products" class="well">
            <app-product [product]="prod"></app-product>
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