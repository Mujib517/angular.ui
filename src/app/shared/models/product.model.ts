import { Review } from "./review.model";

export class Product {
    brand: string;
    price: number;
    model: string;
    inStock: boolean;
    _id: string;
    lastUpdated: Date;
    reviews: Review[]
}
