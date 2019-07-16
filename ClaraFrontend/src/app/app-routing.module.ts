// import core modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import services
import { AuthService } from './services/auth/auth.service';

// import components
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { DashboardSplashComponent } from './components/dashboards/dashboard-splash/dashboard-splash.component';
import { UserDashboardComponent } from './components/dashboards/user-dashboard/user-dashboard.component';
import { SharedDashboardsComponent } from './components/dashboards/shared-dashboards/shared-dashboards.component';
import { UserHowToComponent } from './components/dashboards/user-how-to/user-how-to.component';
import { SharedHowToComponent } from './components/dashboards/shared-how-to/shared-how-to.component';

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
      { path: '', redirectTo: 'dashboardSplash', pathMatch: 'full' },
      {
        path: 'dashboardSplash',
        component: DashboardSplashComponent,
        data: { title: 'Dashboard' },
        children: [
          { path: '', redirectTo: 'personalExample', pathMatch: 'full' },
          { path: 'personalExample', component: UserHowToComponent },
          { path: 'sharedExample', component: SharedHowToComponent },
        ]
      },
      { path: 'personalDashboard', component: UserDashboardComponent, data: { title: 'My Dashboard' } },
      { path: 'sharedDashboards', component: SharedDashboardsComponent, data: { title: 'Shared Dashboards' } },
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
