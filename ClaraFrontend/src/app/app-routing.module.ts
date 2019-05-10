import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedDashboardComponent } from './components/shared-dashboard/shared-dashboard.component';
import { IdeasComponent } from './components/ideas/ideas.component';




const routes: Routes = [
  { path: 'personalDashboard', component: UserDashboardComponent, data: { title: 'Personal Dashboard' } },
  { path: 'sharedDashboard', component: SharedDashboardComponent, data: { title: 'Shared Dashboards' } },
  { path: 'ideas', component: IdeasComponent, data: { title: 'Ideas' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
