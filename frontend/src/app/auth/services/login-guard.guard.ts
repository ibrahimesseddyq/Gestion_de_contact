import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {


  constructor(private router: Router,
    private authService: AuthService) {

  }

  // fixme : redirect to dashboard if user is connected
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    //this.router.navigate(['/gestion/dashboard']);
  }


}
