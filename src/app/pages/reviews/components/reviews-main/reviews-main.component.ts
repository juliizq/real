import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews-main',
  templateUrl: './reviews-main.component.html',
  styleUrls: ['./reviews-main.component.scss']
})
export class ReviewsMainComponent implements OnInit, OnDestroy {

  reviews : Review[]  = [];
  subscription! : Subscription;

  constructor( private reviewService : ReviewService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){
    this.subscription = this.reviewService.getReviews().subscribe((reviews) => {
      this.reviews = reviews
    })
  }

}
