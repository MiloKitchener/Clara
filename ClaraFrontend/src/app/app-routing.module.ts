// import core modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import services
import { AuthService } from './services/auth/auth.service';

// import components
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DashboardSplashComponent } from './components/dashboards/dashboard-splash/dashboard-splash.component';
import { UserDashboardComponent } from './components/dashboards/user-dashboard/user-dashboard.component';
import { SharedDashboardsComponent } from './components/dashboards/shared-dashboards/shared-dashboards.component';
import { UserHowToComponent } from './components/dashboards/user-how-to/user-how-to.component';
import { SharedHowToComponent } from './components/dashboards/shared-how-to/shared-how-to.component';

import { OpenDatasetsComponent } from './components/datasets/open-datasets/open-datasets.component';
import { ImportedDatasetsComponent } from './components/datasets/imported-datasets/imported-datasets.component';
import { OfficialAPIDataComponent } from './components/datasets/official-apidata/official-apidata.component';

import { AlexaFeedComponent } from './components/alexa/alexa-feed/alexa-feed.component';
import { AlexaHelpComponent } from './components/alexa/alexa-help/alexa-help.component';

import { IdeasComponent } from './components/ideas/ideas.component';

import { LabServicesComponent } from './components/lab-services/lab-services.component';

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
      {
        path: 'dashboardSplash',
        component: DashboardSplashComponent,
        data: { title: 'Dashboard' },
        children: [
          { path: 'personalExample', component: UserHowToComponent },
          { path: 'sharedExample', component: SharedHowToComponent },
        ]
      },
      { path: 'personalDashboard', component: UserDashboardComponent, data: { title: 'My Dashboard' } },
      { path: 'sharedDashboards', component: SharedDashboardsComponent, data: { title: 'Shared Dashboards' } },
      { path: 'openDatasets', component: OpenDatasetsComponent, data: { title: 'Open Datasets' } },
      { path: 'importedDatasets', component: ImportedDatasetsComponent, data: { title: 'Imported Datasets' } },
      { path: 'apiData', component: OfficialAPIDataComponent, data: { title: 'API Data' } },
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
