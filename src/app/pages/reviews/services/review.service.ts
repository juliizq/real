import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Review } from 'src/app/models/review.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = environment.host + '/reviews';


  constructor(private http : HttpClient) { }

  getReviews(){
    return this.http.get<any>(this.baseUrl)
    .pipe(
      map((response : any) => {
        const reviews : Review[] = [];
        for(let reviewsJson of response.reviews){
          const review = new Review();
          review.fromJson(reviewsJson);
          reviews.push(review);
        }
        return reviews;
      })
    )
  }
}
