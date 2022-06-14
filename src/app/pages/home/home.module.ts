import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeMainComponent } from './home-main/home-main.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    
  ]
})
export class HomeModule { }
