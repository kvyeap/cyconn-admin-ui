import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CylinderSearchComponent} from './cylinder-search/cylinder-search.component';

const routes: Routes = [
  {
    path: '',
    component: CylinderSearchComponent,
    title: 'Search Product',
  },
  // {
  //   path: 'add',
  //   component: ProductDetailComponent,
  //   title: 'Add Product',
  // },
  // {
  //   path: ':id',
  //   component: ProductDetailComponent,
  //   title: 'Product Detail',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CylinderRoutingModule {
}
