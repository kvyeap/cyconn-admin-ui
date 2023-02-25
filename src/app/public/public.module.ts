import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {Page404Component} from './page404/page404.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {LoginComponent} from './login/login.component';
import {LayoutsModule} from "../layouts/layouts.module";
import {RegisterComponent} from './register/register.component';
import {NgbDropdownModule, NgbModalModule, NgbModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UIModule} from '../shared/ui/ui.module';
import {RouterModule} from '@angular/router';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {FaqComponent} from './faq/faq.component';
import {ForumComponent} from './forum/forum.component';


@NgModule({
  declarations: [
    Page404Component,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    FaqComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CarouselModule,
    LayoutsModule,
    NgbDropdownModule,
    FormsModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    UIModule,
    RouterModule,
    NgbModalModule
  ]
})
export class PublicModule {
}
