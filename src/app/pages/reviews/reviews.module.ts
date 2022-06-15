import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TooltipModule} from 'primeng/tooltip';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReviewsHeaderComponent } from './components/reviews-header/reviews-header.component';
import { ReviewsMainComponent } from './components/reviews-main/reviews-main.component';
import { CardReviewComponent } from './components/card-review/card-review.component';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {RatingModule} from 'primeng/rating';





@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewsHeaderComponent,
    ReviewsMainComponent,
    CardReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    FormsModule,
    MenubarModule,
    TieredMenuModule,
    TooltipModule,
    CascadeSelectModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    CardModule,
    AvatarModule,
    RatingModule    
  ]
})
export class ReviewsModule { }
