import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from "../../core/services/auth.service";
import {SpinnerVisibilityService} from 'ng-http-loader';
import {environment} from '../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { SweetAlertService } from 'src/app/core/services/sweetalert.service';

declare var require;
const Swal = require('sweetalert2');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  environment = environment;
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  showPassword: boolean;


  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder,
              private spinner: SpinnerVisibilityService,
              private cookieService: CookieService,
              private router: Router,
              private sweetAlertService: SweetAlertService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    this.authenticationService.login(this.loginForm.value).subscribe((data) => {
      console.log(data)
      this.spinner.hide();
      if (data.isSuccess) {
        this.cookieService.set(environment.tokenName, data.result.token);
        this.router.navigate(['home']);
      } else {
        this.sweetAlertService.showError(data.result.message);
      }
    })
  }
}
