import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./models/product.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

    reviews: any[];

    constructor(private http: HttpClient) { }

    get(): Observable<Product[]> {
        return this.http.get<Product[]>("https://rest-node-api.herokuapp.com/api/products");
    }

    getById(id: string): Observable<Product> {
        return this.http.get<Product>(`https://rest-node-api.herokuapp.com/api/products/${id}`);
    }

    delete(id: string) {
        return this.http.delete(`https://rest-node-api.herokuapp.com/api/products/${id}`);
    }

    save(product: any) {
        return this.http.post("https://rest-node-api.herokuapp.com/api/products", product);
    }
}