import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/models/user.model'; 
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-reviews-header',
  templateUrl: './reviews-header.component.html',
  styleUrls: ['./reviews-header.component.scss']
})
export class ReviewsHeaderComponent implements OnInit {

  user: User | undefined;
  value!: string;

  constructor(private authService : AuthService) { 
    this.authService.user.subscribe(x => this.user = x as User);

  }

  ngOnInit(): void {
  }

}
