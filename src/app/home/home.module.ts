import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {MainComponent} from './main/main.component';
import {TopbarComponent} from './topbar/topbar.component';
import {NewcaseComponent} from './newcase/newcase.component';
import {NgbAlertModule, NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {SearchcaseComponent} from './searchcase/searchcase.component';
import {CasedetailsComponent} from './casedetails/casedetails.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ProfileComponent} from './profile/profile.component';
import {ImageviewerModalComponent} from './imageviewer-modal/imageviewer-modal.component';
import { NotificationComponent } from './notification/notification.component';
import {AgmCoreModule} from "@agm/core";
import {environment} from "../../environments/environment";

@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent,
    NewcaseComponent,
    SearchcaseComponent,
    CasedetailsComponent,
    ProfileComponent,
    ImageviewerModalComponent,
    NotificationComponent
  ],
  exports: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    DropzoneModule,
    CarouselModule,
    NgxDatatableModule,
    NgbAlertModule,
    NgbTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
  ],
  entryComponents: [
    ImageviewerModalComponent
  ]
})
export class HomeModule {
}
