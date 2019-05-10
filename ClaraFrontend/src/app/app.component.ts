import { Component } from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RegisterService} from "./services/RegisterService/register.service";

// allows jquery
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  returnUrl: string;

  constructor(
    private loginService: AuthService,
    private regService: RegisterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  // Linking the form logic with the HTML form
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  // Linking the custom signup form with the HTML form
  signUpForm = this.fb.group({
    username: [''],
    email: [''],
    password1: [''],
    password2: [''],
  });

  ngOnInit() {
    // Grabs where the user came from if they were kicked out of a page before
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'personalDashboard';

    /*************************************
      Event Listeners
    **************************************/

    // forgot password listener
    document.getElementById("forgotPW").addEventListener("click", function() {
      document.getElementById("forgotPWPanel").style.display = "block";
      document.getElementById("loginForm").style.display = "none";
    });

    // sign up back button event listener
    document.getElementById("backBtn1").addEventListener("click", function() {
      document.getElementById("signupPanel").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
    });

    // forgotpw back button event listener
    document.getElementById("backBtn2").addEventListener("click", function() {
      document.getElementById("forgotPWPanel").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
    });

    // sign up button event listener
    document.getElementById("signUpBtn").addEventListener("click", function() {
      document.getElementById("loginForm").style.display = "none";

      var signupForm = document.getElementById("signupForm");
      signupForm.style.animation = "fadein 2s";
      signupForm.style.display = "block";
    });
  }

  // has number function for password security
    hasNumber(myString) {
      return /\d/.test(myString);
    }
  // registers a new user
    signUp() {
    console.log("in signup");
      if(this.signUpForm.value.password1 != this.signUpForm.value.password2) { // passwords do not match
        alert("Please Ensure That The Passwords Match");
      }
      else if(this.signUpForm.value.password1.length < 7 || !this.hasNumber(this.signUpForm.value.password1)) { // password meets requirements
        alert("Please Ensure That The Password is at Least 7 Characters Long, and Includes a Number.");
      }
      else { // passwords match
        console.log("Registering user: " + this.signUpForm.value.username + ", with password: " + this.signUpForm.value.password1 + ", and email: " + this.signUpForm.value.email);
        // send post request to add the user
        //console.log(JSON.stringify(this.signUpForm.value));
        this.regService.signUp(JSON.stringify(this.signUpForm.value));
      }
    }
  // Signs in to the main site
  signIn() {
    console.log('Logging in:', this.loginForm.value);
    this.loginService.login(this.loginForm.value, this.returnUrl)

    // display main site content
    if(this.loginService.isUserSessionExpired()) {
      // login animation
      document.getElementById("splash").style.visibility = "visible";
      document.getElementById("splash").style.animation = "fadein 2s";

      setTimeout(function() {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
        document.getElementById("mainPage").style.animation = "fadein 2s";
      }, 3000);
    }
  }
}
