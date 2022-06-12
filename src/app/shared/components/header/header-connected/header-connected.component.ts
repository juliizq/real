import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-header-connected',
  templateUrl: './header-connected.component.html',
  styleUrls: ['./header-connected.component.scss']
})
export class HeaderConnectedComponent implements OnInit {

  constructor(private  authService : AuthService) { }

  items!: MenuItem[];
  profileItems!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {label:'HOW IT WORKS'},
      {label:'REVIEWS'},
    ];

    this.profileItems = [
      {label:'My profile'},
      {label:'My reviews'}
    ];
  }


  logout(){
    this.authService.logout();
  }

}
