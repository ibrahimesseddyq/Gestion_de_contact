import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  constructor(private auth:AuthService) { 
    this.signupForm=new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      repassword: new FormControl('')
    })
  }

  ngOnInit(): void {
  }
  signup(){
    this.auth.signup(this.signupForm.value).subscribe(data=>{

    });
  }
}
