import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cookieService: CookieService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.cookieService.check(environment.tokenName)) {
      return true;
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        allowOutsideClick: false,
        text: 'Please login to access',
      })
      this.router.navigate(['/login']);
      return false;
    }
    // not logged in so redirect to login page with the return url
  }
}
