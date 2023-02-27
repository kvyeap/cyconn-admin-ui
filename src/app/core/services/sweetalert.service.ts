import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(private cookieService: CookieService) {

  }

  showSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message
    });
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }

  showWarning(title: string, message: string) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message
    });
  }

  showErrorWithCallback(message: string, callback: (result: any) => void) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      showConfirmButton: true
    }).then((result) => {
      callback(result)
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
