import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../shared/product.service';
import { ConsoleLogger } from '../shared/console.logger';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-product-list',
    template: `<h1>Product List</h1>
    <div class="col-md-6">
    <a class="btn btn-danger" routerLink="/products/new">New Product</a>
        <div *ngFor="let prod of products" class="well">
            <app-product [product]="prod"></app-product>
            <hr/>
        </div>
    </div>
    `
})
export class ProductListComponent {
    products;
    //dependency injection. constructor injection
    constructor(private route: ActivatedRoute, private svc: ProductService, private logger: ConsoleLogger) {
        this.products = this.route.snapshot.data.response.data;
        //logger.error("Dummy error");
        // svc.get().subscribe(
        //     (response) => this.products = response["data"],
        //     (err) => console.log(err)
        // );
    }
}
//pipes : uppercase lowerccase titlecase currency date json async