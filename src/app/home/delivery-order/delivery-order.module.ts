import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryOrderRoutingModule } from './delivery-order-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeliveryOrderSearchComponent} from './delivery-order-search/delivery-order-search.component';
import {DeliveryOrderDetailComponent} from './delivery-order-detail/delivery-order-detail.component';
import {LibModule} from '../../lib/lib.module';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DeliveryOrderSearchComponent,
    DeliveryOrderDetailComponent
  ],
    imports: [
        CommonModule,
        DeliveryOrderRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        LibModule,
        NgSelectModule
    ]
})
export class DeliveryOrderModule { }
