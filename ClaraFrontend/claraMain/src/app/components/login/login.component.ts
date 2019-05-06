import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(
    private loginService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  // Linking the form logic with the HTML form
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  ngOnInit() {
      // Grabs where the user came from if they were kicked out of a page before
      this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'personalDashboard';
  }

  // Signs in to the main site
  signIn() {
    console.log('Logging in:', this.loginForm.value);
    this.loginService.login(this.loginForm.value, this.returnUrl);
  }
}
