import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'create',
  //   component: CustomerDetailComponent,
  //   data: {
  //     title: 'Create Customer'
  //   }
  // },
  // { path: 'detail/:id',
  //   component: CustomerDetailComponent,
  //   data: {
  //     title: 'Customer Detail'
  //   }
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
