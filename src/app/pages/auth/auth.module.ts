import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ]
})
export class AuthModule { }
