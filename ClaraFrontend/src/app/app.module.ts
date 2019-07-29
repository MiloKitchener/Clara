// import core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { MatMenuModule, MatButtonModule } from '@angular/material';
import { MatExpansionModule, MatTabsModule } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';

// import third party modules
import { ChartsModule } from 'ng2-charts';

// import components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { DatasetComponent } from './components/dataset/dataset.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';

// import sub components
import { IdeaNodeComponent } from './components/idea-node/idea-node.component';
import { GraphPanelComponent } from './components/graph-panel/graph-panel.component';
import { AlexaFeedComponent } from './components/alexa-feed/alexa-feed.component';
import { DashboardsMainComponent } from './components/dashboards/dashboards-main/dashboards-main.component';
import { IdeaAnchorDirective } from './directives/idea-anchor.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { LiveDataGraphPanelComponent } from './components/live-data-graph-panel/live-data-graph-panel.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SplashComponent } from './components/splash/splash.component';
import { DashboardComponent } from './components/dashboards/dashboard/dashboard.component';
import { ArUploadComponent } from './components/ar-upload/ar-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    IdeaNodeComponent,
    GraphPanelComponent,
    DatasetComponent,
    LabServicesComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent,
    AlexaFeedComponent,
    IdeaAnchorDirective,
    ProfileComponent,
    LiveDataGraphPanelComponent,
    DevicesComponent,
    SplashComponent,
    DashboardsMainComponent,
    DashboardComponent,
    ArUploadComponent,
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
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    CookieService, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [IdeaNodeComponent]
})

export class AppModule { }
