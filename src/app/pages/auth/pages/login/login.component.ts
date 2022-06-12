import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs';
import { RoutingStateService } from 'src/app/shared/services/routing-state.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm!: FormGroup;
  loading : boolean = false;
  returnUrl: string = '';

  error :  string =  '';
  

  constructor(public _translate: TranslateService, private _router: Router, private _authService : AuthService, private _routingStateService: RoutingStateService,
    private _formBuilder: FormBuilder) {
      // redirect to home if already logged in
      if (this._authService.currentUser) { 
        this._router.navigate(['/home']);
      }
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required])
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._routingStateService.getReturnUrl() || '/home';
  }


  // onChangeLanguage(language : string){
  //   this._translate.setDefaultLang(language);
  //   this._translate.use(language);

  //   localStorage.setItem('language', language);
  // }
  

  loginUser(){
    const email  =  this.loginForm.get('email')?.value;
    const password  =  this.loginForm.get('password')?.value;
    this.loading = true;
    this._authService.login(email, password)
    .pipe(first())
      .subscribe({
          next: () => {
              this.loading = false;
              this._router.navigate([this.returnUrl]);
          },
          error: (error : HttpErrorResponse) => {
             switch(error.status){
               case 401 :
                 this.error =  'login.errors.unauthorize';
             } 
              this.loading = false;
          }
      });
  }
}
