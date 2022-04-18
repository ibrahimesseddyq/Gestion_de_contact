import { JwtHelperService } from "@auth0/angular-jwt";
import { Title } from '@angular/platform-browser';
import { DataService } from './../../../shared/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  
  loginForm: FormGroup;
  msg = '';

  loginform = true;
  recoverform = false;


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService,
              private router: Router,
              private dataService:DataService,
              private titleService:Title) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  ngOnInit() {
    this.titleService.setTitle("Gestion De contact");
  }

  login() {

    this.authService.login(this.loginForm.value).subscribe((data: any) => {
       let date = new Date();

       let today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
      this.dataService.currentUser = data;
      this.router.navigate(['/settings']);
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(data.jwt);

      localStorage.setItem('jwt',data.jwt);
      localStorage.setItem('id',decodedToken.data.id);
      localStorage.setItem('username',decodedToken.data.username);
      localStorage.setItem('doj',decodedToken.data.doj);
      localStorage.setItem('lastlog',today);

      console.log(data);

    },(error: any) => {
      console.log(error);
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
