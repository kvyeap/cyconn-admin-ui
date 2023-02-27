import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FormGroup} from '@angular/forms';
import {CookieService} from "ngx-cookie-service";

@Injectable({ providedIn: 'root' })
export class UserService {

  userInfo = null;

  constructor(private http: HttpClient,
              public cookieService: CookieService) { }

  // getUserInfo() {
  //   return this.userInfo;
  // }
  //
  // setUserInfo(data) {
  //   this.userInfo = data;
  // }
  //
  // loadUserInfo(): Promise<any> {
  //   if(this.cookieService.check(environment.tokenName)) {
  //     return this.getInfo().toPromise().then(
  //       (response) => {
  //         if(response.isSuccess) {
  //           this.userInfo = response.result;
  //         }
  //       }
  //     );
  //   }
  // }

  // getInfo(): Observable<any> {
  //   return this.http.get(environment.apiUrl + '/public/user/info');
  // }

}
