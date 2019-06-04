import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedDashboardsComponent } from './components/shared-dashboards/shared-dashboards.component';
import { DashboardSplashComponent } from './components/dashboard-splash/dashboard-splash.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthService } from './services/auth/auth.service';
import { AlexaFeedComponent } from './components/alexa-feed/alexa-feed.component';
import { AlexaHelpComponent } from './components/alexa-help/alexa-help.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Log in' } },
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Clara' },
    canActivate: [AuthService],
    children: [
      { path: '', redirectTo: 'dashboardSplash', pathMatch: 'full' },
      { path: 'dashboardSplash', component: DashboardSplashComponent, data: { title: 'Dashboard' } },
      { path: 'personalDashboard', component: UserDashboardComponent, data: { title: 'My Dashboard' } },
      { path: 'sharedDashboards', component: SharedDashboardsComponent, data: { title: 'Shared Dashboards' } },
      { path: 'datasets', component: DatasetsComponent, data: { title: 'Datasets' } },
      { path: 'alexa-help', component: AlexaHelpComponent, data: { title: 'Alexa Help' } },
      { path: 'alexa-feed', component: AlexaFeedComponent, data: { title: 'Alexa Feed' } },
      { path: 'ideas', component: IdeasComponent, data: { title: 'Ideas' } },
      { path: 'lab-services', component: LabServicesComponent, data: { title: 'Lab-Services' } }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
