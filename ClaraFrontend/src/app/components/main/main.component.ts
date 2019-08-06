import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {
  
  user: User;
  screenIcon: string;
  mobile: boolean;
  sideNav: boolean;

  constructor(
    private _profileService: ProfileService,
    private logoutService: AuthService,
    public _dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.screenIcon = "fullscreen";
    this.user = this._profileService.getUser();
    this.mobile = detectmob();
    this.sideNav = false;
  }

  /*********************
   *  Class Methods
   ********************/

  // logs user out of the site, returns to login page
  public logout(): void {
    this.logoutService.logout();
    // Reload the current page without the browser cache
    location.reload(true);
  }

  public toggleSideNav(): void {
    if(this.sideNav == false) {
      // open nav
      document.getElementById("side-navigation").style.width = "250px";
      document.getElementById("top-bar").style.marginLeft = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("toggle-nav-btn").style.display = "none";
      this.sideNav = true;
    }
    else {
      // close nav
      document.getElementById("side-navigation").style.width = "0";
      document.getElementById("top-bar").style.marginLeft = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("toggle-nav-btn").style.display = "block";
      this.sideNav = false;
    }
  }

  // toggles fullscreen
  public toggleFullScreen(): void {
    // Trigger fullscreen
    if(this.screenIcon == "fullscreen") {
      const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
    
      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
      }
      this.screenIcon = "fullscreen_exit";
    }

    // close fullscreen
    else {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
        docWithBrowsersExitFunctions.msExitFullscreen();
      }
      this.screenIcon = "fullscreen";
    }
  }

  addDashboard() {
    var name = prompt("What is the Dashboard's Name?");
    this._dashboardService.addDashboard(name);
  }
}

function detectmob() { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }