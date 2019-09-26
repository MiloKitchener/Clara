import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Hub} from 'aws-amplify';
import {DashboardService} from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  signUpConfig = {
    header: 'Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password'
      }
    ]
  };

  private setupFlag = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    // Grabs where the user came from if they were kicked out of a page before
    this.authService.setReturn(this.route.snapshot.queryParams.returnUrl || 'main');

    // Create dashboards on user signup
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signUp':
          this.setupFlag = true;
          break;
        case 'signIn':
          if (this.setupFlag) {
            // TODO: Implement the initial dashboard creation properly (right now it will break if user navigates away)
            this.dashboardService.addDashboard('Main', 'This is the default main dashboard.').then();
            this.dashboardService.addDashboard('Mobile', 'This is the default mobile dashboard.').then();
          }
          this.setupFlag = false;
          break;
      }
    });
  }

  toSplash() {
    this.router.navigate(['/splash']).then();
  }
}
