import {Component} from '@angular/core';
import {AuthenticationService} from '../../core/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  success: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  doSubmit() {
    if (this.form.valid) {
      this.authenticationService.requestForgetPasswordLink(this.form).subscribe(data => {
        this.success = true;
      })
    }

  }
}
