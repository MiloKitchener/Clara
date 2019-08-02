import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';
// @ts-ignore
import * as datasets from '../mock/datasets.json';

const urls = [
    {
        url: environment.backendIP + 'datasets/',
        json: datasets
    },
    {
        url: environment.backendIP + 'datasets/',
        json: datasets
    }
];

@Injectable()
// Mock architecture made following https://dev.to/sanidz/angular-http-mock-interceptor-for-mocked-backend-1h5g
export class HttpMockInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const element of urls) {
            if (request.url === element.url) {
                console.log('Loaded from json: ' + request.url);
                return of(new HttpResponse({ status: 200, body: ((element.json) as any).default }));
            }
        }
        console.log('Loaded from http call:' + request.url);
        return next.handle(request);
    }
}
