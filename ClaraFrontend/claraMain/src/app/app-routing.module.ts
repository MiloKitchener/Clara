import { NgModule } from '@angular/core';
// Services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all components for which navigation is required
import { PersonalDashboardComponent } from './components/personal-dashboard/personal-dashboard.component';
import { SharedDashboardsComponent } from './components/shared-dashboards/shared-dashboards.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth/auth.service';

// Define routes
const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'personalDashboard',
    component: PersonalDashboardComponent,
    canActivate: [AuthService]
  },
  {
    path: 'sharedDashboard',
    component: SharedDashboardsComponent
  },
  {
    path: 'datasets',
    component: DatasetsComponent
  },
  {
    path: 'ideas',
    component: IdeasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
