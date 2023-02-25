import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/auth.service';
import Swal from "sweetalert2";
import {SpinnerVisibilityService} from "ng-http-loader";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private spinner: SpinnerVisibilityService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      this.spinner.hide();
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        Swal.fire({
          icon: 'warning',
          title: 'Warning',
          allowOutsideClick: false,
          text: 'Invalid session, please login again',
        }).then(result => {
          this.authenticationService.logout();
        });
      }
      else{
        Swal.fire({
          icon: 'warning',
          title: 'Oops!',
          text: 'Something went wrong.'
        });
      }
      return throwError(err.error.message || err.statusText);
    }));
  }
}
