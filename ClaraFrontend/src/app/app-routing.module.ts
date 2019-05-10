import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedDashboardComponent } from './components/shared-dashboard/shared-dashboard.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';

const routes: Routes = [
  { path: '', redirectTo: 'personalDashboard', pathMatch: 'full' },
  { path: 'personalDashboard', component: UserDashboardComponent, data: { title: 'Personal Dashboard' } },
  { path: 'sharedDashboard', component: SharedDashboardComponent, data: { title: 'Shared Dashboards' } },
  { path: 'datasets', component: DatasetsComponent, data: { title: 'Datasets' } },
  { path: 'ideas', component: IdeasComponent, data: { title: 'Ideas' } },
  { path: 'lab-services', component: LabServicesComponent, data: { title: 'Lab-Services' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
