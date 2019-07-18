import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})

export class SplashComponent implements OnInit {
  whiteNavbar: boolean;

  constructor() { }

  ngOnInit() {
    this.whiteNavbar = false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.whiteNavbar = true;
    } else if (number <= 100) {
      this.whiteNavbar = false;
    }
  };
}
