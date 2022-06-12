import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './pages/auth/pages/forgot-password/forgot-password.component';
import { LogInComponent } from './pages/auth/pages/login/login.component';
import { SignUpComponent } from './pages/auth/pages/sign-up/sign-up.component';

const routes: Routes = [
  { path : 'login', component: LogInComponent},
  { path : 'register', component: SignUpComponent},
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'reviews', loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
