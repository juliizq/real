import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../pages/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: User | undefined;
  items!: MenuItem[];
  subscriptionUser!: Subscription;
  subscriptionLanguage!: Subscription;
  visibleSidebar: any;
  
  constructor(private authService : AuthService, private translate: TranslateService) { 
    this.subscriptionUser = this.authService.user.subscribe(x => this.user = x as User);
    this.subscriptionLanguage = this.translate.onLangChange.subscribe((event: LangChangeEvent)=>{
      this.renderMenuItem();
    })
  }

  ngOnInit(): void {
    this.renderMenuItem();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionUser.unsubscribe();
    this.subscriptionLanguage.unsubscribe();
  }
 

  renderMenuItem(){
    this.translate.get('header').subscribe((headerlabels: any) => {
      console.log('headerlabels:', headerlabels)
      this.items = [
      {label:headerlabels.how_it_works},
      {label:'REVIEWS', routerLink: ['/reviews']},
      // {label : 'LOGIN', routerLink: ['/login']},
      // {label : 'REGISTER', routerLink: ['/register']}
    ];
      //=> 'hello world'
  });
  }

}
