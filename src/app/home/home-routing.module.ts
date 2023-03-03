import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    title: 'Customer',
    data: {title: 'Customer'},
    canActivate: [AuthGuard]
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    title: 'Product',
    data: {title: 'Product'},
    canActivate: [AuthGuard]
  },
  {
    path: 'cylinder',
    loadChildren: () => import('./cylinder/cylinder.module').then(m => m.CylinderModule),
    title: 'Cylinder',
    canActivate: [AuthGuard]
  },
  {
    path: 'delivery-order',
    loadChildren: () => import('./delivery-order/delivery-order.module').then(m => m.DeliveryOrderModule),
    title: 'Delivery Order',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'product',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
