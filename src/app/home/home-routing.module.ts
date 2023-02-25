import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {NewcaseComponent} from "./newcase/newcase.component";
import {SearchcaseComponent} from "./searchcase/searchcase.component";
import {CasedetailsComponent} from "./casedetails/casedetails.component";
import {ProfileComponent} from './profile/profile.component';
import {NotificationComponent} from "./notification/notification.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'newcase', component: NewcaseComponent},
  {path: 'searchcase', component: SearchcaseComponent},
  {path: 'casedetails/:id', component: CasedetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'notification', component: NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
