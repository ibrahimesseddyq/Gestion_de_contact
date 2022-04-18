import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: any;
  authUrl: string = environment.apiAuthUrl ;


  constructor(private http: HttpClient) {

  }

  login(payload: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, payload, {})
  }
  signup(payload:any){
    return this.http.post(`${this.authUrl}/signup`,payload);
  }

  getCurrentUser() {
    return localStorage.getItem('jwt');
  }




}