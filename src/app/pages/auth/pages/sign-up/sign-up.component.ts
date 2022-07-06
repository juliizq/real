import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { RoutingStateService } from 'src/app/shared/services/routing-state.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;
  loading : boolean = false;
  returnUrl: string = '';
  error :  string =  '';

  constructor(private _authService : AuthService, private _formBuilder: FormBuilder, private _routingStateService: RoutingStateService, private _router: Router) { 
    if (this._authService.currentUser) { 
      this._router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required])
    })
    this.returnUrl = this._routingStateService.getReturnUrl() || '/home';
  }

  registerUser(){
    const firstName = this.registerForm.get('firstName')?.value;
    const lastName = this.registerForm.get('lastName')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    this.loading = true;
    this._authService.register(firstName, lastName, email, password)
    .pipe(first())
      .subscribe({
          next : () => {
            this.loading = false;
            this._router.navigate([this.returnUrl])
          },
          error : (error : HttpErrorResponse) => {
            switch (error.status){
              case 401 : 
                this.error = 'register.errors.unauthorize'
            }
            this.loading = false;
          }
      })
  }

}
