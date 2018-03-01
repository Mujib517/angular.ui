import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-reviews',
  template: `
   <h3 *ngIf="reviews && reviews.length>0">Reviews</h3>
   <h3 *ngIf="!reviews||reviews.length==0">Be the first one to review</h3>
   <div *ngFor="let review of reviews">
      <h3>{{review.name}} {{review.rating}} *</h3>
      <h4>{{review.subject}}</h4>
      <p>{{review.message}}</p>
      <hr/>
   </div>
  `
})
export class ReviewsComponent {

  reviews: any[];

  constructor(private svc: ProductService) {
    this.reviews = svc.reviews;
  }
}
