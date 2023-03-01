import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from '@angular/forms';
import {LibModule} from '../../lib/lib.module';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CustomerSearchComponent,
    CustomerDetailComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        LibModule,
        NgSelectModule
    ]
})
export class CustomerModule { }
