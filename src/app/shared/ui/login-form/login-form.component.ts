import {AfterContentInit, AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {SweetAlertService} from '../../../core/services/sweetalert.service';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../../core/services/auth.service';
import {SpinnerVisibilityService} from 'ng-http-loader';
import {UserService} from '../../../core/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';

declare const google: any; // declare the google variable to avoid TypeScript errors

@Component({
  selector: 'lib-form-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements AfterViewInit{

  showPassword: boolean;

  constructor(private renderer: Renderer2,
              private router: Router,
              private cookieService: CookieService,
              private sweetAlertService: SweetAlertService,
              private translateService: TranslateService,
              public authenticationService: AuthenticationService,
              private spinner: SpinnerVisibilityService,
              private userService: UserService) { }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => {
      google.accounts.id.initialize({
        client_id: '899155101499-gt8nri32urf3ko8cdpnu9g5ljkedrj1m.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this)
      });
      google.accounts.id.prompt();
      google.accounts.id.disableAutoSelect();
      google.accounts.id.renderButton(
        document.getElementById("signInButton"),
        {
          theme: "filled_blue",
          size: "large" ,
          shape: "pill",
          callback: this.handleCredentialResponse.bind(this)
        }  // customization attributes
      );
    };
    this.renderer.appendChild(document.body, script);
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    this.spinner.show();
    this.authenticationService.login(this.form.get('email').value, this.form.get('password').value).subscribe((data) => {
      this.spinner.hide();
      if (data.isSuccess) {
        this.saveTokenAndLogin(data.result.token);
      } else {
        this.sweetAlertService.showError(data.result.code);
      }
    })
  }

  handleCredentialResponse(response: any) {
    console.log(response)
      // handle the credential response here
    this.authenticationService.loginGoogle(response.credential).subscribe(data => {
      if (data.isSuccess) {
        this.saveTokenAndLogin(data.result.token);
      } else {
        if (data.result.code == 'E0021') {  // unregistered user will be redirected to register page
          this.sweetAlertService.showErrorWithCallback(data.result.code, (response)=> {
            if (response) {
              this.router.navigate(['/public/register/' + data.result.data]).then(r => console.log(r));
            }
          });
        } else {
          this.sweetAlertService.showError(data.result.code);
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
          });
        }
      }
    })
  }

  saveTokenAndLogin(token: string) {
    this.cookieService.set(environment.tokenName, token);
    this.userService.getInfo().subscribe((response) => {
        this.userService.setUserInfo(response.result);
        this.router.navigate(['/home/main']).then(r => console.log(r));
      }
    );
  }
}

