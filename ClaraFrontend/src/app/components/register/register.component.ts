import { Component,OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {RegisterService} from "../../services/RegisterService/register.service";

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

 returnUrl: string;

  constructor(
    private regService: RegisterService,
    private fb: FormBuilder,
  ) { }

  // Linking the form logic with the HTML form
  signUpForm = this.fb.group({
    username: ['test new'],
    email: ['jakevink@plswork.ca'],
    password1: ['test1234'],
    password2: ['test1234'],
  });

  ngOnInit() {
     // do nothing
  }

  hasNumber(myString) {
      return /\d/.test(myString);
    }

  // put error checking here
  signUp() {
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
}


// old function if passing forms dosent work
/*       signUp(username, passwordOne, passwordTwo, emailAddress) {
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
        this.service.signUp(username, emailAddress, passwordOne, passwordTwo)
          .subscribe(res =>{
            console.log('sucess?');
          });
      }
    }
 */
