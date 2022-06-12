import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
 
@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss']
})
export class HeaderPublicComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {label:'HOW IT WORKS'},
      {label:'REVIEWS'},
    ];
  }
}

  


