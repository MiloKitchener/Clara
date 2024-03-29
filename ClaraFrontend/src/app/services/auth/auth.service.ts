import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from '../../../environments/environment';
import {AmplifyService} from 'aws-amplify-angular';
import {Auth} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private returnURL = 'main';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private amplifyService: AmplifyService
  ) {
    // Watch to see if there are changes to the state of authentication
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        // User logs in
        if (authState.state === 'signedIn') {
          // Send to user to whatever page they were last at, or main page
          this.router.navigate([this.returnURL]).then();
        }
      });
  }

  accessURL = environment.backendIP + 'api/token/';
  refreshURL = environment.backendIP + 'api/token/refresh/';

  setReturn(returnURL: string) {
    this.returnURL = returnURL;
  }

  login(loginData, returnUrl) {
    return this.http.post<any>(this.accessURL, loginData).subscribe(
      response => { // Server authentication is successful
        // Set both access token and refresh token in the local storage of the client
        this.cookieService.set(environment.access_token_name, response.access);
        this.cookieService.set(environment.refresh_token_name, response.refresh);
        // TODO: Re-add login animation
        // Login animation
        // document.getElementById('splash').style.visibility = 'visible';
        // document.getElementById('splash').style.animation = 'fadein 2s';
        // Redirect user to where they came from
        this.router.navigate([returnUrl]).then();
      },
      error => console.log('Error', error)
    );
  }

  signUp(signupData) {
    this.http.post<any>(environment.backendIP + 'signup/', signupData).subscribe(
      (res) => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  logout() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  // Refresh the access token
  refreshToken(): Observable<any> {
    return this.http.post<any>(this.refreshURL, { refresh: this.getRefreshToken()})
      .pipe(
        map(response => {
        // If refresh token worked, replace the old access token
        if (response) {
          this.cookieService.set(environment.access_token_name, response.access);
        }
        return response.access;
      }));
  }

  // Get the access token from the cookies
  getAccessToken() {
    return this.cookieService.get(environment.access_token_name);
  }

  // Get the refresh token from the cookies
  getRefreshToken() {
    return this.cookieService.get(environment.refresh_token_name);
  }

  // Checks to see if access token or refresh token is still valid by expiry
  isUserSessionExpired() {
    const helper = new JwtHelperService();
    if (helper.isTokenExpired(this.cookieService.get(environment.access_token_name))) { // Access token is expired
      // Refresh token is still valid / expired
      return helper.isTokenExpired(this.cookieService.get(environment.refresh_token_name));
    }
    // Access token is still valid
    return false;
  }
}
