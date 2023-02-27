import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from './loader/loader.component';
import {BlogContentComponent} from './blog-content/blog-content.component';
import {TableComponent} from './table/table.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {PageTitleComponent} from './page-title/page-title.component';

@NgModule({
  declarations: [
    LoaderComponent,
    TableComponent,
    BlogContentComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [LoaderComponent, TableComponent, BlogContentComponent]
})

export class LibModule {
}
