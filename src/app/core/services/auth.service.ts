import {Injectable} from '@angular/core';

import {getFirebaseBackend} from '../../authUtils';

import {User} from '../models/auth.models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FormGroup} from '@angular/forms';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

const authLocalStorageToken = `${environment.tokenName}`;

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  user: User;

  constructor(public http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
  }

  /**
   * Returns the current user
   */
  public currentUser(): User {
    return getFirebaseBackend().getAuthenticatedUser();
  }

  // /**
  //  * Performs the auth
  //  * @param email email of user
  //  * @param password password of user
  //  */
  // login(email: string, password: string) {
  //     return getFirebaseBackend().loginUser(email, password).then((response: any) => {
  //         const user = response;
  //         return user;
  //     });
  // }
  //
  // /**
  //  * Performs the register
  //  * @param email email
  //  * @param password password
  //  */
  // register(email: string, password: string) {
  //     return getFirebaseBackend().registerUser(email, password).then((response: any) => {
  //         const user = response;
  //         return user;
  //     });
  // }
  //
  // /**
  //  * Reset password
  //  * @param email email
  //  */
  // resetPassword(email: string) {
  //     return getFirebaseBackend().forgetPassword(email).then((response: any) => {
  //         const message = response.data;
  //         return message;
  //     });
  // }
  //
  // /**
  //  * Logout the user
  //  */
  // logout() {
  //     // logout the user
  //     getFirebaseBackend().logout();
  // }

  loginGoogle(credential: string): Observable<any> {
    let form = {
      credential: credential
    }
    return this.http.post(environment.apiUrl + '/auth/user/login/google', form);
  }

  requestTAC(form: FormGroup): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/tac/request/verify-mobile', form.value);
  }

  requestVerifyLink(form: FormGroup): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/request/verify-email', form.value);
  }

  requestForgetPasswordLink(form: FormGroup): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/request/forget-password', form.value);
  }

  requestChangePasswordLink(form: FormGroup): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/request/change-password', form.value);
  }

  verifySecurityTAC(uuid: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/auth/verify/public/' + uuid);
  }

  login(form: FormGroup): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/login', form);
  }

  logout() {
    this.cookieService.delete(environment.tokenName);
    this.router.navigate(['/login']);
  }

}

