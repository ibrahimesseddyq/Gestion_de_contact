import { DataService } from './../../shared/services/data.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService,
    private dataService: DataService,) {

}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.getCurrentUser()){
      return true;
    }
    this.router.navigate(['/login']);
      return false;
  }
  
}
