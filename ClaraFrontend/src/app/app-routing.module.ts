import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedDashboardComponent } from './components/shared-dashboard/shared-dashboard.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import {AuthService} from './services/auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'personalDashboard', component: UserDashboardComponent, data: { title: 'Personal Dashboard' }, canActivate: [AuthService] },
  { path: 'sharedDashboard', component: SharedDashboardComponent, data: { title: 'Shared Dashboards' } },
  { path: 'datasets', component: DatasetsComponent, data: { title: 'Datasets' } },
  { path: 'ideas', component: IdeasComponent, data: { title: 'Ideas' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
