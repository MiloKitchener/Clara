import { NgModule } from '@angular/core';
// services for navigation
import { Routes, RouterModule } from '@angular/router';

// import all components for which navigation is required
import { PersonalDashboardComponent } from './components/personal-dashboard/personal-dashboard.component';
import { SharedDashboardsComponent } from './components/shared-dashboards/shared-dashboards.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { IdeasComponent } from './components/ideas/ideas.component';

// define routes
const routes: Routes = [
  {
    path: "",
    redirectTo: "/personalDashboard",
    pathMatch: "full"
  },
  {
    path: "personalDashboard",
    component: PersonalDashboardComponent
  },
  {
    path: "sharedDashboard",
    component: SharedDashboardsComponent
  },
  {
    path: "datasets",
    component: DatasetsComponent
  },
  {
    path: "ideas",
    component: IdeasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
