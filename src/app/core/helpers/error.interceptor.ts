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
      switch (err.status) {
        case 401:         // auto logout if 401 response returned from api
          Swal.fire({
            icon: 'warning',
            title: 'Warning',
            allowOutsideClick: false,
            text: 'Invalid session, please login again',
          }).then(result => {
            console.log(result)
            this.authenticationService.logout();
          });
          break;
        case 500:         // auto logout if 401 response returned from api
          Swal.fire({
            icon: 'warning',
            title: 'Warning',
            allowOutsideClick: false,
            text: 'Server error',
          })
          break;
        default:
          Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'Something went wrong'
          });
      }
      console.error(err)
      return throwError(err.error.message || err.statusText);
    }));
  }
}
