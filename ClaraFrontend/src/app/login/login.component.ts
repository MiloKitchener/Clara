import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private returnUrl: string;
  private loginForm: any;

  constructor(
    private loginService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Linking the form logic with the HTML form
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
    
    // Grabs where the user came from if they were kicked out of a page before
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'main';
  }
  
  // calls login service to log user into website
  signIn() {
    this.loginService.login(this.loginForm.value, this.returnUrl)
  }

  // calls sign up service to create a new user profile
  signUp() {
    alert("Sign Up");
  }

  // calls forgot password service to get the user's password reset
  forgotPW() {
    alert("Forgot PW");
  }

  // reveals login form
  goToLogin() {
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("forgotPWForm").style.display = "none";
    var loginForm = document.getElementById("loginForm");
    loginForm.style.animation = "fadein 2s";
    loginForm.style.display = "block";
  }

  // reveals signup form
  goToSignup() {
    document.getElementById("loginForm").style.display = "none";
    var signupForm = document.getElementById("signUpForm");
    signupForm.style.animation = "fadein 2s";
    signupForm.style.display = "block";
  }

  // reveals forgot PW form
  goToForgotPW() {
    document.getElementById("loginForm").style.display = "none";
    var forgotPWForm = document.getElementById("forgotPWForm")
    forgotPWForm.style.animation = "fadein 2s";
    forgotPWForm.style.display = "block";
  }
}
