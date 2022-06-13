import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent implements OnInit {

  valueRating : number = 3;
  
  constructor() { }

  

  ngOnInit(): void {
    
  }

  
}
