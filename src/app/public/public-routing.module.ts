import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./page404/page404.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Not Found'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
