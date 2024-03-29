import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatasetComponent } from './components/dataset/dataset.component';
import { AlexaFeedComponent } from './components/alexa-feed/alexa-feed.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SplashComponent } from './components/splash/splash.component';
import {AuthGuard} from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent, data: { title: 'Welcome to Clara' } },
  { path: 'login', component: LoginComponent, data: { title: 'Log in' } },
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Clara' },
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard/Main', pathMatch: 'full' },
      { path: 'dashboard', redirectTo: 'dashboard/Main', pathMatch: 'full' },
      { path: 'dashboard/:name', component: DashboardComponent },
      { path: 'devices', component: DevicesComponent, data: { title: 'Devices' } },
      { path: 'dataset', component: DatasetComponent, data: { title: 'Dataset' } },
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
