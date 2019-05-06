import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedDashboardComponent } from './components/shared-dashboard/shared-dashboard.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { ProfileThumbnailComponent } from './components/profile-thumbnail/profile-thumbnail.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {JwtInterceptorService} from './services/auth/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    SharedDashboardComponent,
    DatasetsComponent,
    IdeasComponent,
    ProfileThumbnailComponent,
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
