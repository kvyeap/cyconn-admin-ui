import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CylinderRoutingModule } from './cylinder-routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from '@angular/forms';
import {LibModule} from '../../lib/lib.module';
import {CylinderSearchComponent} from './cylinder-search/cylinder-search.component';


@NgModule({
  declarations: [
    CylinderSearchComponent
  ],
    imports: [
        CommonModule,
        CylinderRoutingModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        LibModule
    ]
})
export class CylinderModule { }
