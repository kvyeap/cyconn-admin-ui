import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(private translateService: TranslateService,
              private cookieService: CookieService) {

    this.translateService.setDefaultLang(this.cookieService.get('lang'));
  }

  showSuccess(message: string) {
    this.translateService.get(message).subscribe((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: data
      });
    });
  }

  showError(code: string) {
    this.translateService.get('ERROR_STATUS').subscribe((data: any) => {
      const message = data.find(x => Object.keys(x)[0] === code);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message[code]
      });
    });
  }

  showWarning(title: string, message: string) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message
    });
  }

  showErrorWithCallback(code: string, callback: (result: any) => void) {
    this.translateService.get('ERROR_STATUS').subscribe((data: any) => {
      const message = data.find(x => Object.keys(x)[0] === code);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message[code],
        showConfirmButton: true
      }).then((result) => {
        callback(result)
      });
    });
  }

  showSuccessWithCallback(message: string, callback: () => void) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
    }).then((result) => {
      callback()
    });
  }

  showInfo(title: string, message: string) {
    Swal.fire({
      icon: 'info',
      title: title,
      text: message
    });
  }
}
