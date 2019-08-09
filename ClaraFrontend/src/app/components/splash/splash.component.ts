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

  // routes user to login component
  public goToLogin() {
    this.router.navigate(['/login'])
  }

  // scrolls page to element in function argument
  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // scroll event listener
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
