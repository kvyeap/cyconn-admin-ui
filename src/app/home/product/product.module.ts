import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductSearchComponent} from './product-search/product-search.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LibModule} from '../../lib/lib.module';


@NgModule({
  declarations: [
    ProductSearchComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    LibModule
  ]
})
export class ProductModule {
}
