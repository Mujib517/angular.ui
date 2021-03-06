import { Component, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../shared/product.service';
import { ConsoleLogger } from '../shared/console.logger';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product.model';


@Component({
    selector: 'app-product-list',
    template: `<h1>Product List</h1>
    <div class="col-md-6">
    <a class="btn btn-danger" routerLink="/products/new">New Product</a>
    <a class="btn btn-danger" routerLink="/products/new-reactive">New Product Reactive</a>
        <div *ngFor="let prod of products" class="well">
            <app-product [product]="prod" (notify)="onNotify()"></app-product>
            <hr/>
        </div>
    </div>
    `
})
export class ProductListComponent implements DoCheck {

    ngDoCheck(): void {
        console.log("Product list change detection ");
    }
    products: Product[];
    //dependency injection. constructor injection
    constructor(private route: ActivatedRoute, private svc: ProductService, private logger: ConsoleLogger) {
        this.products = this.route.snapshot.data.response.data;
    }

    onNotify(data) {
        this.svc.get().subscribe(
            (response) => this.products = response["data"],
            (err) => console.log(err)
        );
    }


}
//pipes : uppercase lowerccase titlecase currency date json async