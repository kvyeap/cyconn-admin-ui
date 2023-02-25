import { Component } from '@angular/core';
import {AuthenticationService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {SweetAlertService} from '../../core/services/sweetalert.service';
import {CookieService} from 'ngx-cookie-service';
import {TranslateService} from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpinnerVisibilityService} from "ng-http-loader";
import Swal from "sweetalert2";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,
              private cookieService: CookieService,
              private sweetAlertService: SweetAlertService,
              private translateService: TranslateService,
              private authenticationService: AuthenticationService,
              private spinner: SpinnerVisibilityService,
              private userService: UserService) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    this.spinner.show();
    this.authenticationService.login(this.form.get('email').value, this.form.get('password').value).subscribe((data) => {
      this.spinner.hide();
      if (data.isSuccess) {
        this.cookieService.set(environment.tokenName, data.result.token);

        this.userService.getInfo().subscribe((response) => {
            this.userService.setUserInfo(response.result);
            this.router.navigate(['/home/main']).then(r => console.log(r));
          }
        );
      } else {
        this.sweetAlertService.showError(data.result.code);
      }
    })
  }

  resetPassword() {

  }

  signUp() {

  }
}
