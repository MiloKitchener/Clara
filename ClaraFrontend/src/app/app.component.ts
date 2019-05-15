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

  // user profile vars
  user = {
    "name": "William McKinnon",
    "title": "Smart City Developer",
    "pictureSrc": "assets/avatar.png"
  }

  constructor() { }

  ngOnInit() { }
}
