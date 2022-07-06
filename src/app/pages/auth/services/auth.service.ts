import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../../../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User |null>;
  public user: Observable<User |null>;
  public get currentUser(): User {
    return this.userSubject.value as User;
  }

  private baseUrl = environment.host + '/auth';

  private refreshTokenTimeout : any;

  public jwtHelper: JwtHelperService = new JwtHelperService();


  constructor(private httpClient : HttpClient, private router : Router) {
      this.userSubject = new BehaviorSubject<User |null>(null);
      this.user = this.userSubject.asObservable();
   }

  register(firstName : string, lastName : string, email : string, password : string){
    return this.httpClient.post(`${this.baseUrl}/register`, { firstName, lastName, email, password})
    .pipe(
      map((response : any) => {
        localStorage.setItem('accessToken', response.accessToken);
        this.userSubject.next(response.user);
        this.startRefreshTokenTimer();
        return response.user;
      })
    )
  }

  login(email : string, password : string){
    return this.httpClient.post( `${this.baseUrl}/login` , { email, password }, { withCredentials: true })
    .pipe(
      map((response : any) =>{
        localStorage.setItem('accessToken', response.accessToken);
        this.userSubject.next(response.user);
        this.startRefreshTokenTimer();
        return response.user;
      })
    )
  }

  logout() {
    this.httpClient.post<any>(`${this.baseUrl}/logout`, {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();
    localStorage.removeItem('accessToken');
    this.userSubject.next(null);
    this.router.navigate(['/home']);
  }

  refreshToken() {
    return this.httpClient.post(`${this.baseUrl}/refresh-token`, {}, { withCredentials: true })
    .pipe(
      map((response : any) => {
        localStorage.setItem('accessToken', response.accessToken);
        this.userSubject.next(response.user);
        this.startRefreshTokenTimer();
        return response.user;
      }),
      catchError((err, caught) => {
        return err;
      })
    );
  }

  isTokenValid() {
    const token: string | null = localStorage.getItem("accessToken");
    if(!token){
      return false;
    }

    try{
      return !this.jwtHelper.isTokenExpired(token)
    }catch(error){
      localStorage.removeItem('accessToken');
      return false;
    }
  }


  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken){
      return this.logout();
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
    if(this.refreshTokenTimeout){
      clearTimeout(this.refreshTokenTimeout);
    }
  }
}
