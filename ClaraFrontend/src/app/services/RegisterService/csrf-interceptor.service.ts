import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterService} from "../../services/RegisterService/register.service";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CsrfInterceptorService implements HttpInterceptor  {

  constructor(
     private cookieService: CookieService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cookieToken = this.cookieService.get('XSRF-TOKEN');
    request = request.clone({setHeaders:{
       'HTTP_X_CSRFTOKEN': cookieToken,
     },
   withCredentials: true
});
return next.handle(request);
}
}
