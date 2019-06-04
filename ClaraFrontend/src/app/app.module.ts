
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { IdeaNodeComponent } from './components/idea-node/idea-node.component';
import { GraphPanelComponent } from './components/graph-panel/graph-panel.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { GraphDataService } from './services/graph-data/graph-data.service';
import { AlexaFeedComponent } from './components/alexa-feed/alexa-feed.component';
import { SharedDashboardsComponent } from './components/shared-dashboards/shared-dashboards.component';
import { DashboardSplashComponent } from './components/dashboard-splash/dashboard-splash.component';
import { AlexaHelpComponent } from './components/alexa-help/alexa-help.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    IdeasComponent,
    IdeaNodeComponent,
    GraphPanelComponent,
    DatasetsComponent,
    LabServicesComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent,
    AlexaFeedComponent,
    SharedDashboardsComponent,
    DashboardSplashComponent,
    AlexaHelpComponent,
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
