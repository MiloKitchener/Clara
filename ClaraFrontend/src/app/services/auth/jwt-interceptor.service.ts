import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {
  HttpErrorResponse,
  HttpHandler, HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, finalize, switchMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  // Used to make sure we do not call refresh again if more calls are being made client side that require access
  isRefreshingToken = false;
  // A queue that will use the new token when we get it
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private authService: AuthService) { }

    static addAuthToken(request, accessToken) {
      return request.clone({setHeaders: {Authorization: 'Bearer ' + accessToken}});
    }

   intercept(
        request: HttpRequest<any>,
        next: HttpHandler
   ): Observable<any> {
        // Add authorization header with jwt token if available
        return next.handle(JwtInterceptorService.addAuthToken(request, this.authService.getAccessToken()))
          .pipe(
            catchError(err => {
              if (err instanceof HttpErrorResponse) {
                // Server says user is not authorized, access token is invalid or expired
                if ((err as HttpErrorResponse).status === 401) {
                  // This will try to refresh the access token
                  return this.handle401Error(request, next);
                }
              } else {
                return throwError(err);
              }
        }));
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) { // Not already trying to refresh the token
      this.isRefreshingToken = true;

      // Make the queue wait till we get the new token
      this.tokenSubject.next(null);

      return this.authService.refreshToken()
        .pipe(
          switchMap((accessToken: string) => {
            if (accessToken) { // New access token was acquired, pass to queue and the request
              this.tokenSubject.next(accessToken);
              return next.handle(JwtInterceptorService.addAuthToken(request, accessToken));
            }
            return this.authService.logout() as any;
          }),
          catchError(() => {
            return this.authService.logout() as any;
          }),
          finalize(() => {
            this.isRefreshingToken = false;
          })
        );
    } else { // Already refreshing, add to queue
      this.isRefreshingToken = false;

      return this.tokenSubject
        .pipe(filter(token => token != null),
          take(1),
          switchMap(token => {
          return next.handle(JwtInterceptorService.addAuthToken(request, token));
        }));
    }
  }
}
