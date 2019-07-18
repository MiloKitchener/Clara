import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})

export class SplashComponent implements OnInit {
  whiteNavbar: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.whiteNavbar = false;
  }

  public goToLogin() {
    this.router.navigate(['/login'])
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 150) {
      this.whiteNavbar = true;
    } else if (number <= 150) {
      this.whiteNavbar = false;
    }
  };
}
