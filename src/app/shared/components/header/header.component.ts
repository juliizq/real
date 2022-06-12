import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../pages/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User | undefined;
  items!: MenuItem[];
  
  constructor(private authService : AuthService, private translate: TranslateService) { 
    this.authService.user.subscribe(x => this.user = x as User);
    this.translate.onLangChange.subscribe((event: LangChangeEvent)=>{
      this.renderMenuItem();
    })
  }

  ngOnInit(): void {

    this.renderMenuItem();
   
  }

  renderMenuItem(){
    this.translate.get('header').subscribe((headerlabels: any) => {
      console.log('headerlabels:', headerlabels)
      this.items = [
      {label:headerlabels.how_it_works},
      {label:'REVIEWS', routerLink: ['/reviews']}
    ];
      //=> 'hello world'
  });
  }

}
