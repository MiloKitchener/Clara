import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {

  screenIcon: string;
  mobile: boolean;
  sideNav: boolean;
  dashboards: any = [];

  constructor(
    private profileService: ProfileService,
    private logoutService: AuthService,
    public dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.screenIcon = 'fullscreen';
    this.mobile = detectmob();
    this.sideNav = false;
    this.dashboardService.getDashboards().then(data => {
      this.dashboards = data.items;
    });
  }

  // Logs user out of the site, returns to login page
  public logout() {
    this.logoutService.logout();
    // Reload the current page without the browser cache
    location.reload();
  }


  // Toggles the side navbar (used for mobile viewing)
  public toggleSideNav() {
    if (this.sideNav === false) {
      // open nav
      document.getElementById('side-navigation').style.width = '250px';
      document.getElementById('top-bar').style.marginLeft = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      document.getElementById('toggle-nav-btn').style.display = 'none';
      this.sideNav = true;
    } else {
      // close nav
      document.getElementById('side-navigation').style.width = '0';
      document.getElementById('top-bar').style.marginLeft = '0';
      document.getElementById('main').style.marginLeft = '0';
      document.getElementById('toggle-nav-btn').style.display = 'block';
      this.sideNav = false;
    }
  }


  // Toggles fullscreen
  public toggleFullScreen() {
    // Trigger fullscreen
    if (this.screenIcon === 'fullscreen') {
      const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };

      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen().then();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen().then();
      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen().then();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen().then();
      }
      this.screenIcon = 'fullscreen_exit';
    } else {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen().then();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
        docWithBrowsersExitFunctions.mozCancelFullScreen().then();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        docWithBrowsersExitFunctions.webkitExitFullscreen().then();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
        docWithBrowsersExitFunctions.msExitFullscreen().then();
      }
      this.screenIcon = 'fullscreen';
    }
  }


  // Create a dashboard with a specified name and desc
  public addDashboard() {
    const name = prompt('What is the Dashboard\'s Name?');
    const desc = prompt('What is the Dashboard\'s Description?');
    // User didn't hit cancel
    if (name != null) {
      // Name invalid
      if (name === '') {
        alert('Please Provide a Name For the Dashboard');
      } else {
        this.dashboardService.addDashboard(name, desc).then();
      }
    }
  }

}

// Detects if site is being viewed on a mobile device
function detectmob() {
  return !!(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i));
 }
