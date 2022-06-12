import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingStateService {

  private returnUrl : string = '';
  private previousUrl: string = '';
  private currentUrl: string = '';

  excludeAuthUrl = ['/login', '/register', '/forgot-password', '/reset-password'];

  constructor(private router : Router) {
    router.events.subscribe(event => {
      // Set return url 
      if (event instanceof NavigationEnd && !this.excludeAuthUrl.includes(event.url) ) {
        this.returnUrl = event.url;
      };

      if (event instanceof NavigationEnd ) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  public initRoutingState(){
    this.currentUrl = this.router.url;
    this.returnUrl = !this.excludeAuthUrl.includes(this.router.url) ? this.router.url : '';
  }

  public getReturnUrl(){
    return this.returnUrl;
  }

  public getPreviousUrl(){
    return this.previousUrl;
  }
}
