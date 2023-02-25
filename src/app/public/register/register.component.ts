import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {SweetAlertService} from '../../core/services/sweetalert.service';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../core/services/auth.service';
import {DecimalPipe} from '@angular/common';
import {UserService} from '../../core/services/user.service';
import {SpinnerVisibilityService} from "ng-http-loader";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DecimalPipe]
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private cookieService: CookieService,
              private sweetAlertService: SweetAlertService,
              private translateService: TranslateService,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              private spinner: SpinnerVisibilityService) {
  }

  formSubmitted: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  sentTAC: boolean = false;
  countdownMessage: string = '';
  tacMessage: string = '';
  countdown: number = 0;
  intervalId: any;

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : { mismatch: true };
  };

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/)]),
    confirmPassword: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [Validators.required, Validators.pattern(/^[01]\d{9,10}$/)]),
    // tac: new FormControl('', [Validators.required]),
    isCitizen: new FormControl('', [Validators.required]),
    nricPassportNo: new FormControl('', [Validators.required]),
  }, {validators: this.passwordMatchValidator});

  startTimer(minutes: number) {
    this.countdown = minutes * 60;
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.sentTAC = false;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  get isCitizen() {
    return this.form.get('isCitizen').value;
  }

  // requestTAC() {
  //   if (this.form.get('mobileNo').valid) {
  //     this.spinner.show();
  //     // Send TAC code
  //     this.authenticationService.requestTAC(this.form).subscribe((data) => {
  //       this.spinner.hide();
  //       if (data.isSuccess) {
  //         this.sentTAC = true;
  //         this.form.patchValue({tac: data.result.tac});
  //         this.startTimer(data.result.expiryTimer);
  //         this.translateService.get('PAGE_REGISTER.INPUT_TXT_TAC').subscribe((res: string) => {
  //           this.tacMessage = res.replace('{mobileNo}', this.form.get('mobileNo').value);
  //         });
  //         this.translateService.get('PAGE_REGISTER.BUTTON_TOOLTIP_SEND_TAC').subscribe((res: string) => {
  //           this.countdownMessage = res;
  //         });
  //       } else {
  //         this.sweetAlertService.showError(data.result.code);
  //       }
  //     });
  //   }
  // }

  doRegister() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.spinner.show();
      this.userService.register(this.form).subscribe((data) => {
        this.spinner.hide();
        if (data.isSuccess) {
          this.sweetAlertService.showSuccess('PAGE_REGISTER.REGISTER_SUCCESSFUL');
          this.router.navigate(['/public/login']).then(r => console.log(r));
        } else {
          this.sweetAlertService.showError(data.result.code);
        }
      })
    }
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.has('email')) {
      this.form.patchValue({
        email: this.activatedRoute.snapshot.paramMap.get('email')
      })
    }
  }

}
