import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedDashboardComponent } from './components/shared-dashboard/shared-dashboard.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { RegisterComponent } from "./components/register/register.component";
import { IdeaNodeComponent } from './components/idea-node/idea-node.component';
import { GraphPanelComponent } from './components/graph-panel/graph-panel.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { LabServicesComponent } from './components/lab-services/lab-services.component';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { GraphDataService } from './services/graph-data/graph-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    SharedDashboardComponent,
    IdeasComponent,
    RegisterComponent,
    IdeaNodeComponent,
    GraphPanelComponent,
    DatasetsComponent,
    LabServicesComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
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
