import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerSearchComponent} from './customer-search/customer-search.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerSearchComponent,
    title: 'Search Customer',
  },
  {
    path: 'add',
    component: CustomerDetailComponent,
    title: 'Add Customer',
  },
  {
    path: ':uuid',
    component: CustomerDetailComponent,
    title: 'Customer Detail',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
