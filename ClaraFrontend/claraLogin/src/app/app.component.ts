import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private service: AppService){}

  ngOnInit() {
    // login button event listener
    $("#loginForm").submit(function(e) {
      e.preventDefault();
      var form = document.forms["loginForm"];
      signIn(form.elements["username"].value, form.elements["password"].value);
    });

    // sign up button event listener
    $("#signupPanel").submit(function(e) {
      e.preventDefault();
      var form = document.forms["signupPanel"];
      // might edit to just send the form
        //signUp(form);
      signUp(form.elements["username"].value, form.elements["password"].value, form.elements["passwordConfirm"].value, form.elements["email"].value);
    });

    // resend password button event listener
    $("#forgotPWPanel").submit(function(e) {
      e.preventDefault();
      var form = document.forms["forgotPWPanel"];
      resendPW(form.elements["email"].value);
    });

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

      var signupForm = document.getElementById("signupPanel");
      signupForm.style.animation = "fadein 2s";
      signupForm.style.display = "block";
    });

    /************************************
      FUNCTIONS
    ************************************/


    // signs in to main site
    function signIn(username, password) {
      console.log("Logging in as user: " + username + ", with password: " + password);

      var csrftoken = getCookie('csrftoken');

      $.ajax({
        headers: {"HTTP_X_CSRFTOKEN":csrftoken},
        type: "POST",
        url: "http://35.182.196.173:8000/api/login/",
        data: {username: username, password:password},
      });

      // login animation
      document.getElementById("splash").style.visibility = "visible";
      document.getElementById("splash").style.animation = "fadein 2s";
    }


    // creates a new account
    function signUp(username, passwordOne, passwordTwo, emailAddress) {
      console.log('test if this runs');
      if(passwordOne != passwordTwo) { // passwords do not match
        alert("Please Ensure That The Passwords Match");
      }
      else if(passwordOne.length < 7 || !hasNumber(passwordOne)) { // password meets requirements
        alert("Please Ensure That The Password is at Least 7 Characters Long, and Includes a Number.");
      }
      else { // passwords match
        console.log("Registering user: " + username + ", with password: " + passwordOne + ", and email: " + emailAddress);
        // send post request to add the user
        this.AppService.signUp(username, emailAddress, passwordOne, passwordTwo)
          .subscribe(res =>{
            console.log('sucess?');
            signIn(username, passwordOne);
          });
       // signIn(username, passwordOne); // call this in the  call back
      }
    }


    /*
    // IF the backend works better by recieving a form
    function signUp(form) {
      console.log(form.elements["username"].value);
      if(form.passwordOne != form.passwordTwo) { // passwords do not match
        alert("Please Ensure That The Passwords Match");
      }
      else if(form.passwordOne.length < 7 || !hasNumber(form.passwordOne)) { // password meets requirements
        alert("Please Ensure That The Password is at Least 7 Characters Long, and Includes a Number.");
      }
      else { // passwords match
        console.log("Registering user: " + form.username + ", with password: " + form.passwordOne + ", and email: " + form.emailAddress);
        // send post request to add the user
        //HttpClient.post();
       // signIn(username, passwordOne); // call this in the  call back
      }
    }
*/

    // resends the password associated with the user's email
    function resendPW(emailAddress) {
      console.log("Resending password to " + emailAddress);
    }


    // checks if a string contains a number (used in ensuring passwords contain a number)
    function hasNumber(myString) {
      return /\d/.test(myString);
    }

    function getCookie(name) {
   var cookieValue = null;
   if (document.cookie && document.cookie !== '') {
       var cookies = document.cookie.split(';');
       for (var i = 0; i < cookies.length; i++) {
           var cookie = cookies[i].trim();
           // Does this cookie string begin with the name we want?
           if (cookie.substring(0, name.length + 1) === (name + '=')) {
               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               break;
           }
       }
   }
   return cookieValue;
}
var csrftoken = getCookie('csrftoken');
  }
}
