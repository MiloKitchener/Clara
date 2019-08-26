import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private loginService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Grabs where the user came from if they were kicked out of a page before
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'tabs';
  }

  signIn() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.loginService.login(this.loginForm.value, this.returnUrl)
    }
  }

}
