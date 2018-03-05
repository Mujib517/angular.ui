import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    reviews: any[];

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get("https://rest-node-api.herokuapp.com/api/products");
    }

    getById(id: string) {
        return this.http.get(`https://rest-node-api.herokuapp.com/api/products/${id}`);
    }

    delete(id:string){
        return this.http.delete(`https://rest-node-api.herokuapp.com/api/products/${id}`);
    }
}