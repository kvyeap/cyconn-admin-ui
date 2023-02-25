import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import {LoaderComponent} from './loader/loader.component';
import {TopbarWithoutLoginComponent} from './topbar-without-login/topbar-without-login.component';
import {RouterModule} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {BlogContentComponent} from './blog-content/blog-content.component';

@NgModule({
  declarations: [
    LoaderComponent,
    TopbarWithoutLoginComponent,
    LoginFormComponent,
    BlogContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    RouterModule
  ],
  exports: [LoaderComponent, TopbarWithoutLoginComponent, LoginFormComponent, BlogContentComponent]
})
export class UIModule {
}
