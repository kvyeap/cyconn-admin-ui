import {Component} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {LanguageService} from '../../../core/services/language.service';

@Component({
  selector: 'app-topbar-without-login',
  templateUrl: './topbar-without-login.component.html',
  styleUrls: ['./topbar-without-login.component.scss']
})
export class TopbarWithoutLoginComponent {

  constructor(private languageService: LanguageService,
              private cookieService: CookieService) {
  }

  toggleLang() {
    let currLang = this.cookieService.get('lang');
    if (currLang === 'en') {
      currLang = 'my';
    } else {
      currLang = 'en';
    }
    this.languageService.setLanguage(currLang);
  }
}
