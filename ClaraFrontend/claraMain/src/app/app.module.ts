import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDashboardComponent } from './components/personal-dashboard/personal-dashboard.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { SharedDashboardsComponent } from './components/shared-dashboards/shared-dashboards.component';
import { ProfileThumbnailComponent } from './components/profile-thumbnail/profile-thumbnail.component';
import { DatarowComponent } from './components/datarow/datarow.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDashboardComponent,
    IdeasComponent,
    DatasetsComponent,
    SharedDashboardsComponent,
    ProfileThumbnailComponent,
    DatarowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
