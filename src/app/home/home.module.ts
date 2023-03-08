import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {NgbAlertModule, NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {CarouselModule} from "ngx-owl-carousel-o";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {AgmCoreModule} from "@agm/core";
import {environment} from "../../environments/environment";
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    DropzoneModule,
    CarouselModule,
    NgbAlertModule,
    NgbTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
  ],
})
export class HomeModule {
}
