import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductSearchComponent} from './product-search/product-search.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {Page404Component} from '../../public/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: ProductSearchComponent,
    title: 'Product',
  },
  {
    path: 'add',
    component: ProductDetailComponent,
    title: 'Add Product',
  },
  {
    path: ':uuid',
    component: ProductDetailComponent,
    title: 'Product Detail',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
