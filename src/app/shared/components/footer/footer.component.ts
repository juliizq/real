import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  languages!: any[];
  selectedLanguage: any;


  constructor(public _translate: TranslateService) { }

  ngOnInit(): void {

    this.languages = [
      {name : "EN"},
      {name : "ES"}
    ]
  }

  onChangeLanguage(language : string){
    this._translate.setDefaultLang(language);
    this._translate.use(language);
    localStorage.setItem('language', language);
    console.log('language:', language)
  }
  

}
