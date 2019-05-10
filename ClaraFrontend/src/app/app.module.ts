import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {JwtInterceptorService} from './services/auth/jwt-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedDashboardComponent } from './components/shared-dashboard/shared-dashboard.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { ProfileThumbnailComponent } from './components/profile-thumbnail/profile-thumbnail.component';
import { DatasetNodeComponent } from './components/dataset-node/dataset-node.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";
import {CsrfInterceptorService} from "./services/RegisterService/csrf-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    SharedDashboardComponent,
    DatasetsComponent,
    IdeasComponent,
    ProfileThumbnailComponent,
    DatasetNodeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true,
  },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CsrfInterceptorService,
    multi: true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
