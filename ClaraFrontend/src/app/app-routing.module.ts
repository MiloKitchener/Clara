// import core modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import services
import { AuthService } from './services/auth/auth.service';

// import components
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { DashboardsMainComponent } from './components/dashboards/dashboards-main/dashboards-main.component';
import { UserDashboardComponent } from './components/dashboards/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './components/dashboards/dashboard/dashboard.component';

import { DatasetComponent } from './components/dataset/dataset.component';

import { AlexaFeedComponent } from './components/alexa/alexa-feed/alexa-feed.component';
import { AlexaHelpComponent } from './components/alexa/alexa-help/alexa-help.component';

import { IdeasComponent } from './components/ideas/ideas.component';

import { LabServicesComponent } from './components/lab-services/lab-services.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SplashComponent } from './components/splash/splash.component';

// define routes
const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent, data: { title: 'Welcome to Clara' } },
  { path: 'login', component: LoginComponent, data: { title: 'Log in' } },
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Clara' },
    canActivate: [AuthService],
    children: [
      { path: '', redirectTo: 'dashboardsMain', pathMatch: 'full' },
      { path: 'dashboardsMain',
        component: DashboardsMainComponent,
        data: { title: 'Dashboards' },
        children: [
          //{ path: '', redirectTo: 'dashboard/:dashboardID', pathMatch: 'full' }, REDIRECT TO MAIN DASHBOARD
          { path: 'dashboard/:dashboardID', component: DashboardComponent }, 
        ]
      }, 
      { path: 'devices', component: DevicesComponent, data: { title: 'Devices' } },
      { path: 'dataset', component: DatasetComponent, data: { title: 'Dataset' } },
      { path: 'alexa-help', component: AlexaHelpComponent, data: { title: 'Alexa Help' } },
      { path: 'alexa-feed', component: AlexaFeedComponent, data: { title: 'Alexa Feed' } },
      { path: 'ideas', component: IdeasComponent, data: { title: 'Ideas' } },
      { path: 'lab-services', component: LabServicesComponent, data: { title: 'Lab-Services' } },
      { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
