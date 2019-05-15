import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  // user profile vars
  user = {
    "name": "William McKinnon",
    "title": "Smart City Developer",
    "pictureSrc": "assets/images/avatar.png"
  }

  constructor() { }

  ngOnInit() { }

}
