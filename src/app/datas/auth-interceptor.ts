import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interception')
    request = request.clone({
      setHeaders: {
        'Authorization': JSON.parse(localStorage.getItem('salvator-pass'))
      }
    });
    console.log(request)
    return next.handle(request);
  }
}
