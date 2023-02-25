import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit{

  success: boolean = false;
  invalid: boolean = false;

  constructor(private authenticationService: AuthenticationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      this.authenticationService.verifySecurityTAC(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data => {
        if (data.isSuccess) {
          this.success = true;
        } else {
          this.invalid = true;
        }
      })
    }
  }

}
