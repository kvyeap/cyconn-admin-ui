import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "./page404/page404.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {FaqComponent} from './faq/faq.component';
import {ForumComponent} from './forum/forum.component';

const routes: Routes = [
  {path: '404', component: Page404Component},
  {path: 'main', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/:email', component: RegisterComponent},
  {path: 'verify-email/:id', component: VerifyEmailComponent},
  {path: 'change-password/:id', component: ChangePasswordComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'forum', component: ForumComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
