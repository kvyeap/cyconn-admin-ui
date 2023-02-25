import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../core/services/auth.service';
import {UserService} from '../../core/services/user.service';
import {SweetAlertService} from '../../core/services/sweetalert.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  session: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private sweetAlertService: SweetAlertService,
              private router: Router) {
  }

  form = new FormGroup({
    tac: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  }, {validators: this.passwordMatchValidator});

  passwordMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('confirmPassword').value ? null : {'mismatch': true};
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      const uuid = this.activatedRoute.snapshot.paramMap.get('id');
      this.authenticationService.verifySecurityTAC(uuid).subscribe(data => {
        this.session = true;
        if (data.isSuccess) {
          this.form.setValue({
            tac: uuid,
            password: '',
            confirmPassword: '',
          })
        }
      })
    }
  }

  doSubmit() {
    if (this.form.valid) {
      this.userService.changePassword(this.form).subscribe(data => {
        if (data.isSuccess) {
          this.sweetAlertService.showSuccessWithCallback('Password updated successfully', ()=>{
            this.router.navigate(['/home/profile']);
          });
        } else {
          this.sweetAlertService.showError(data.result.code);
        }
      })
    }

  }


}
