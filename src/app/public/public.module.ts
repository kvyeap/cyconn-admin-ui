import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PublicRoutingModule } from './public-routing.module';
import {Page404Component} from "./page404/page404.component";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [Page404Component, LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class PublicModule { }
