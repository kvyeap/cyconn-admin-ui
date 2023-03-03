import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeliveryOrderSearchComponent} from './delivery-order-search/delivery-order-search.component';
import {DeliveryOrderDetailComponent} from './delivery-order-detail/delivery-order-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryOrderSearchComponent,
    title: 'Delivery Order',
  },
  {
    path: 'add',
    component: DeliveryOrderDetailComponent,
    title: 'Add Delivery Order',
  },
  {
    path: ':uuid',
    component: DeliveryOrderDetailComponent,
    title: 'Delivery Order Detail',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryOrderRoutingModule {
}
