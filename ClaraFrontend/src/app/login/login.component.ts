import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private returnUrl: string;
  private loginForm: FormGroup;
  private signUpForm: FormGroup;
  private forgotPWForm: FormGroup;
  private loginSubmitted: boolean;
  private signUpSubmitted: boolean;
  private forgotPWSubmitted: boolean;

  constructor(
    private loginService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loginSubmitted = false;
    this.signUpSubmitted = false;
    this.forgotPWSubmitted = false;

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password1: ['', Validators.required, Validators.minLength(6)]
    });

    this.forgotPWForm = this.fb.group({
      email: ['', Validators.required]
    });

    // Grabs where the user came from if they were kicked out of a page before
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'main';
  }

  // calls login service to log user into website
  signIn() {
    this.loginSubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.loginService.login(this.loginForm.value, this.returnUrl)
    }
  }

  // calls sign up service to create a new user profile
  signUp() {
    this.signUpSubmitted = true;
    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    else { // sign up service
      this.loginService.signUp(this.signUpForm.value);
    }
  }

  // calls forgot password service to get the user's password reset
  forgotPW() {
    this.forgotPWSubmitted = true;
    // stop here if form is invalid
    if (this.forgotPWForm.invalid) {
      return;
    }
    else {
      alert("Forgot PW");
    }
  }

  // reveals login form
  goToLogin() {
    // refresh form warnings
    this.loginSubmitted = false;
    this.signUpSubmitted = false;
    this.forgotPWSubmitted = false;

    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("forgotPWForm").style.display = "none";
    var loginForm = document.getElementById("loginForm");
    loginForm.style.animation = "fadein 2s";
    loginForm.style.display = "block";
  }

  // reveals signup form
  goToSignup() {
    // refresh form warnings
    this.loginSubmitted = false;
    this.signUpSubmitted = false;
    this.forgotPWSubmitted = false;

    document.getElementById("loginForm").style.display = "none";
    var signupForm = document.getElementById("signUpForm");
    signupForm.style.animation = "fadein 2s";
    signupForm.style.display = "block";
  }

  // reveals forgot PW form
  goToForgotPW() {
    // refresh form warnings
    this.loginSubmitted = false;
    this.signUpSubmitted = false;
    this.forgotPWSubmitted = false;

    document.getElementById("loginForm").style.display = "none";
    var forgotPWForm = document.getElementById("forgotPWForm")
    forgotPWForm.style.animation = "fadein 2s";
    forgotPWForm.style.display = "block";
  }


  /************************************
   * Form Getters
   ***********************************/

  // signup form getter
  get signUpF() {
    return this.signUpForm.controls;
  }

  // login form getter
  get loginF() {
    return this.loginForm.controls;
  }

  // forgot PW form getter
  get forgotPWF() {
    return this.forgotPWForm.controls;
  }
}
