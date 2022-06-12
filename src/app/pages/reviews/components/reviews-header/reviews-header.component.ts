import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model'; 
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-reviews-header',
  templateUrl: './reviews-header.component.html',
  styleUrls: ['./reviews-header.component.scss']
})
export class ReviewsHeaderComponent implements OnInit, OnDestroy {

  user: User | undefined;
  value!: string;
  subscriptionUser!: Subscription;

  constructor(private authService : AuthService) { 
    this.subscriptionUser = this.authService.user.subscribe(x => this.user = x as User);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionUser.unsubscribe();
  }
 

}
