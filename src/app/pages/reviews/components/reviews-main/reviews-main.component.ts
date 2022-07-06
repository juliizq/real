import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from '../../services/review.service';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-reviews-main',
  templateUrl: './reviews-main.component.html',
  styleUrls: ['./reviews-main.component.scss'],
  providers: [MessageService]
})
export class ReviewsMainComponent implements OnInit, OnDestroy {

  items: MenuItem[] = [];
  home!: MenuItem;

  reviews : Review[]  = [];
  subscription! : Subscription;

  event! : Event;

  uploadedFiles: any[] = [];

  constructor( private reviewService : ReviewService, private messageService: MessageService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.getReviews();
    this.items = [
      {label: 'ALL'}
      
    ];
  
    this.home = {icon: 'pi pi-home', routerLink : '/home'};
  }

  displayModal!: boolean;
  showDialog() {
    this.displayModal = true;
  }

  getReviews(){
    this.subscription = this.reviewService.getReviews().subscribe((reviews) => {
      this.reviews = reviews
    })
  }

  onUpload(event : any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
