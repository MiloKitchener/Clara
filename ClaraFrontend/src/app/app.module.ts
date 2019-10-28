import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {
  MatMenuModule,
  MatButtonModule,
  MatExpansionModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule, MatGridListModule, MatIconModule, MatCardModule, MatSnackBarModule
} from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { DatasetComponent } from './components/dataset/dataset.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';

import { IdeaNodeComponent } from './components/idea-node/idea-node.component';
import { AddGraphDialogComponent } from './components/add-graph-dialog/add-graph-dialog.component';
import { AlexaFeedComponent } from './components/alexa-feed/alexa-feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LiveDataGraphPanelComponent } from './components/live-data-graph-panel/live-data-graph-panel.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SplashComponent } from './components/splash/splash.component';
import { ArUploadComponent } from './components/ar-upload/ar-upload.component';
import { ArComponent } from './components/ar/ar.component';
import { ArDetailComponent } from './components/ar-detail/ar-detail.component';
import {environment} from '../environments/environment';
import {HttpMockInterceptor} from './interfaces/http-mock-interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpRequestInterceptor} from './interfaces/http-request-interceptor';
import {FileUploadModule} from 'ng2-file-upload';
import { GraphQLModule } from './graphql.module';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { ChartComponent } from './components/chart/chart.component';
import {OpenDataGraphPanelComponent} from './components/open-data-graph-panel/open-data-graph-panel.component';

// Materialize Components

import { MzCollapsibleModule, MzSidenavModule, MzCheckboxModule, MzProgressModule } from 'ngx-materialize'

export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    IdeaNodeComponent,
    AddGraphDialogComponent,
    DatasetComponent,
    LabServicesComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent,
    AlexaFeedComponent,
    ProfileComponent,
    LiveDataGraphPanelComponent,
    OpenDataGraphPanelComponent,
    DevicesComponent,
    SplashComponent,
    DashboardComponent,
    ArUploadComponent,
    ArComponent,
    ArDetailComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    GraphQLModule,
    FileUploadModule,
    AmplifyAngularModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule,
    MzCollapsibleModule,
    MzSidenavModule,
    MzCheckboxModule,
    MzProgressModule
  ],
  providers: [
    CookieService,
    AmplifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockInterceptor : HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [IdeaNodeComponent, AddGraphDialogComponent]
})

export class AppModule { }
