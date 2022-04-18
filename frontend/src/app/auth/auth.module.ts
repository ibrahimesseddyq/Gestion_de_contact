import { AuthenticationRoutes } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SignupComponent } from './containers/signup/signup.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoutes),

  ]
})
export class AuthModule { }
