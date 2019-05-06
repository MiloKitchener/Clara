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
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {JwtInterceptorService} from './services/auth/jwt-interceptor.service';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {AuthService} from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDashboardComponent,
    IdeasComponent,
    DatasetsComponent,
    SharedDashboardsComponent,
    ProfileThumbnailComponent,
    DatarowComponent,
    LoginComponent,
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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
