import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, FactoryProvider, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbAccordionModule, NgbModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {LayoutsModule} from './layouts/layouts.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ErrorInterceptor} from './core/helpers/error.interceptor';
import {JwtInterceptor} from './core/helpers/jwt.interceptor';
import {PublicModule} from './public/public.module';
import {DecimalPipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {NgxPaginationModule} from 'ngx-pagination';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

// function loadDefaultLang(languageService: LanguageService) {
//   return () => languageService.setLanguage('en');
// }
//
// export const initializeDefaultLang: FactoryProvider = {
//   provide: APP_INITIALIZER,
//   useFactory: loadDefaultLang,
//   deps: [LanguageService],
//   multi: true
// };
//
// function loadUserInfo(userService: UserService) {
//   return () => userService.loadUserInfo();
// }
//
// export const initializeUserInfo: FactoryProvider = {
//   provide: APP_INITIALIZER,
//   useFactory: loadUserInfo,
//   deps: [UserService],
//   multi: true
// };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PublicModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CarouselModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbModule,
    NgbTooltipModule,
    ScrollToModule.forRoot(),
    RouterModule,
    NgbModule,
    NgHttpLoaderModule,
    NgxPaginationModule

  ],
  bootstrap: [AppComponent],
  providers: [
    // initializeDefaultLang,
    // initializeUserInfo,
    DecimalPipe,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
})
export class AppModule {
}
