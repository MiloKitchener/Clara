import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  constructor(
    private logoutService: AuthService
  ) { }

  ngOnInit() {
    // add dropdown functionality
    var dropdown = document.getElementsByClassName("dropdownBtn");
    for (var i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }

  // logs user out of the site, returns to login page
  logout() {
    this.logoutService.logout();
    // Reload the current page without the browser cache
    location.reload(true);
  }
}
