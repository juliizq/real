import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


export interface LanguageI{
  name : string; 
  value : string; 
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  languages: LanguageI[]  = [
    { name : "EN", value :  'en' },
    { name : "ES", value :  'es' }
  ]
  selectedLanguage!: LanguageI;


  constructor(public _translate: TranslateService) { }

  ngOnInit(): void {
    this.selectedLanguage = this.languages.find((lang) => lang.value === this._translate.getDefaultLang()) as LanguageI;
  }

  onChangeLanguage(){
    this._translate.setDefaultLang(this.selectedLanguage.value);
    this._translate.use(this.selectedLanguage.value);
    localStorage.setItem('language', this.selectedLanguage.value);
  }
  

}
