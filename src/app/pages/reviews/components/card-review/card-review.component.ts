import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent implements OnInit {

  value : number = 3;

  @Input() review!: Review;
  

  constructor() { }


  ngOnInit(): void {
    
  }


  
}
