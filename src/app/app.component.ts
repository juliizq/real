import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from './pages/auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'real';

  constructor(translate: TranslateService, private authService : AuthService) {
    translate.addLangs(['en', 'es']);
    const language = localStorage.getItem('language');
    if(language && translate.getLangs().includes(language)){
      translate.setDefaultLang(language);
      translate.use(language);
    }else{
      translate.setDefaultLang('en');
      translate.use('en');
    }

    if(this.authService.isTokenValid()){
      this.authService.refreshToken().subscribe();
    }
  }
}
