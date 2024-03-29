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
  MatDialogModule, 
  MatGridListModule, 
  MatIconModule, 
  MatSnackBarModule,
  MatCheckboxModule, 
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
import {environment} from '../environments/environment';
import {HttpMockInterceptor} from './interfaces/http-mock-interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpRequestInterceptor} from './interfaces/http-request-interceptor';
import {FileUploadModule} from 'ng2-file-upload';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { ChartComponent } from './components/chart/chart.component';
import {OpenDataGraphPanelComponent} from './components/open-data-graph-panel/open-data-graph-panel.component';

import {PilotCardsComponent} from './components/pilot-cards/pilot-cards.component';

import { DatasetAddPanelComponent } from './components/dataset-add-panel/dataset-add-panel.component';
import { PostAddPanelComponent } from './components/post-add-panel/post-add-panel.component';
import { LabServicesOptionsComponent } from './components/lab-services-options/lab-services-options.component';
import { IdeaNodeGenerateComponent } from './components/idea-node-generate/idea-node-generate.component';

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
    ChartComponent,
    PilotCardsComponent,
    DatasetAddPanelComponent,
    PostAddPanelComponent,
    LabServicesOptionsComponent,
    IdeaNodeGenerateComponent,
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
    FileUploadModule,
    AmplifyAngularModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule
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
  entryComponents: [IdeaNodeComponent, AddGraphDialogComponent, DatasetAddPanelComponent, PostAddPanelComponent, LabServicesOptionsComponent]
})

export class AppModule { }
