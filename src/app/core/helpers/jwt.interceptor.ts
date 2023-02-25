import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.cookieService.check(environment.tokenName)) {
      request = request.clone({
        setHeaders: {
          'X-Auth-Token': this.cookieService.get(environment.tokenName),
          'Content-Type': 'application/json',
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        }
      });
    }
    return next.handle(request);
  }
}
