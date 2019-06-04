// import core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';

// import services
import { GraphDataService } from './services/graph-data/graph-data.service';

// import components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UserDashboardComponent } from './components/dashboards/user-dashboard/user-dashboard.component';
import { SharedDashboardsComponent } from './components/dashboards/shared-dashboards/shared-dashboards.component';
import { DashboardSplashComponent } from './components/dashboards/dashboard-splash/dashboard-splash.component';

import { AlexaFeedComponent } from './components/alexa/alexa-feed/alexa-feed.component';
import { AlexaHelpComponent } from './components/alexa/alexa-help/alexa-help.component';

import { IdeasComponent } from './components/ideas/ideas.component';
import { IdeaNodeComponent } from './components/idea-node/idea-node.component';
import { GraphPanelComponent } from './components/graph-panel/graph-panel.component';
import { OpenDatasetsComponent } from './components/datasets/open-datasets/open-datasets.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';
import { ImportedDatasetsComponent } from './components/datasets/imported-datasets/imported-datasets.component';
import { OfficialAPIDataComponent } from './components/datasets/official-apidata/official-apidata.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    IdeasComponent,
    IdeaNodeComponent,
    GraphPanelComponent,
    OpenDatasetsComponent,
    LabServicesComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent,
    AlexaFeedComponent,
    SharedDashboardsComponent,
    DashboardSplashComponent,
    AlexaHelpComponent,
    ImportedDatasetsComponent,
    OfficialAPIDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    GraphDataService,
    CookieService, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
