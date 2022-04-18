import { SignupComponent } from './containers/signup/signup.component';
import { LoginGuardGuard } from './services/login-guard.guard';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },{
        path:"signup",
        component:SignupComponent
      }
      /*
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      
      {
        path: 'login2',
        component: Login2Component
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signup2',
        component: Signup2Component
      }
      */
    ]
  }
];

