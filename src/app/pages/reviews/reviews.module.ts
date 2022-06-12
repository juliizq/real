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



@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewsHeaderComponent,
    ReviewsMainComponent,
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
    SharedModule
  ]
})
export class ReviewsModule { }
