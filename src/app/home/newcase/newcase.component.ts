// @ts-nocheck

import {Component, OnInit, ViewChild} from '@angular/core';
import {latLng, marker, tileLayer, Map, icon} from "leaflet";
import {DropzoneComponent, DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {OsmService} from "../../core/services/osm.service";
import {FormfieldService} from "../../core/services/formfield.service";
import {FieldcheckService} from "../../core/services/fieldcheck.service";

import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {CommonitemService} from "../../core/services/commonitem.service";
import {CaseconfigService} from "../../core/services/caseconfig.service";
import {OrganizationService} from "../../core/services/organization.service";
import {CaseService} from "../../core/services/case.service";
import {environment} from "../../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {AttachmentloaderService} from "../../core/services/attachmentloader.service";
import {UserService} from "../../core/services/user.service";
import {SpinnerVisibilityService} from "ng-http-loader";
import {JendelaService} from "../../core/services/jendela.service";

@Component({
  selector: 'app-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.scss']
})
export class NewcaseComponent implements OnInit {

  constructor(private formFieldService: FormfieldService,
              private commonItemService: CommonitemService,
              private caseConfigService: CaseconfigService,
              private organizationService: OrganizationService,
              private fieldCheckService: FieldcheckService,
              private osmService: OsmService,
              private router: Router,
              private caseService: CaseService,
              private cookieService: CookieService,
              private attachmentloaderService: AttachmentloaderService,
              private userService: UserService,
              private spinner: SpinnerVisibilityService,
              private jendelaService: JendelaService) {}

  //Nav
  @ViewChild('nav1') nav1;
  nav1ActiveId = 1;
  @ViewChild('nav2') nav2;
  nav2ActiveId = 1;

  //Form Field
  formField = null;

  //Complaint Details
  onBehalf = false;
  onBehalfName = null;
  onBehalfMobileNumber = null;
  onBehalfEmail = null;
  mcmcRelatedComplaints = null;
  mcmcRelatedComplaintsName = null;
  typeOfService = null;
  typeOfServiceName = null;
  category = null;
  categoryName = null;
  subcategory = null;
  subcategoryName = null;
  platform = null;
  remedy = null;
  remedyName = null;
  description = null;

  //Attachment
  @ViewChild('screenshotOfEBillingStatementAttachmentDz') screenshotOfEBillingStatementAttachmentDz: DropzoneComponent;
  screenshotOfEBillingStatementAttachmentList = [];
  @ViewChild('screenshotSoftCopyOfBillStatementAttachmentDz') screenshotSoftCopyOfBillStatementAttachmentDz: DropzoneComponent;
  screenshotSoftCopyOfBillStatementAttachmentList = [];
  @ViewChild('photoCopyICAttachmentDz') photoCopyICAttachmentDz: DropzoneComponent;
  photoCopyICAttachmentList = [];
  @ViewChild('policeReportAttachmentDz') policeReportAttachmentDz: DropzoneComponent;
  policeReportAttachmentList = [];
  @ViewChild('companyForm9AttachmentDz') companyForm9AttachmentDz: DropzoneComponent;
  companyForm9AttachmentList = [];
  @ViewChild('proofOfConsentAttachmentDz') proofOfConsentAttachmentDz: DropzoneComponent;
  proofOfConsentAttachmentList = [];
  @ViewChild('proofOfRegistrationAttachmentDz') proofOfRegistrationAttachmentDz: DropzoneComponent;
  proofOfRegistrationAttachmentList = [];
  @ViewChild('copyOfAdvertisementAttachmentDz') copyOfAdvertisementAttachmentDz: DropzoneComponent;
  copyOfAdvertisementAttachmentList = [];
  @ViewChild('screenshotOfSmsContentRelatedAttachmentDz') screenshotOfSmsContentRelatedAttachmentDz: DropzoneComponent;
  screenshotOfSmsContentRelatedAttachmentList = [];
  @ViewChild('statutoryDeclarationAttachmentDz') statutoryDeclarationAttachmentDz: DropzoneComponent;
  statutoryDeclarationAttachmentList = [];
  @ViewChild('copyOfRegistrationFormAttachmentDz') copyOfRegistrationFormAttachmentDz: DropzoneComponent;
  copyOfRegistrationFormAttachmentList = [];
  @ViewChild('screenshotOfSignalBarAndServiceAttachmentDz') screenshotOfSignalBarAndServiceAttachmentDz: DropzoneComponent;
  screenshotOfSignalBarAndServiceAttachmentList = [];
  @ViewChild('screenshotOfSpeedTestAttachmentDz') screenshotOfSpeedTestAttachmentDz: DropzoneComponent;
  screenshotOfSpeedTestAttachmentList = [];
  @ViewChild('subscriptionForXMbpsAttachmentDz') subscriptionForXMbpsAttachmentDz: DropzoneComponent;
  subscriptionForXMbpsAttachmentList = [];
  @ViewChild('screenshotOfErrorAttachmentDz') screenshotOfErrorAttachmentDz: DropzoneComponent;
  screenshotOfErrorAttachmentList = [];
  @ViewChild('copyOfAgreementAttachmentDz') copyOfAgreementAttachmentDz: DropzoneComponent;
  copyOfAgreementAttachmentList = [];
  @ViewChild('disputedClauseOfAgreementAttachmentDz') disputedClauseOfAgreementAttachmentDz: DropzoneComponent;
  disputedClauseOfAgreementAttachmentList = [];
  @ViewChild('copyOfConsignmentNoteAttachmentDz') copyOfConsignmentNoteAttachmentDz: DropzoneComponent;
  copyOfConsignmentNoteAttachmentList = [];
  @ViewChild('photoOfTheParcelAttachmentDz') photoOfTheParcelAttachmentDz: DropzoneComponent;
  photoOfTheParcelAttachmentList = [];
  @ViewChild('receiptAttachmentDz') receiptAttachmentDz: DropzoneComponent;
  receiptAttachmentList = [];
  @ViewChild('photoOfParcelBeforeDeliveryAttachmentDz') photoOfParcelBeforeDeliveryAttachmentDz: DropzoneComponent;
  photoOfParcelBeforeDeliveryAttachmentList = [];
  @ViewChild('photoOfParcelReceiveAttachmentDz') photoOfParcelReceiveAttachmentDz: DropzoneComponent;
  photoOfParcelReceiveAttachmentList = [];
  @ViewChild('screenshotOfDisputeContentAttachmentDz') screenshotOfDisputeContentAttachmentDz: DropzoneComponent;
  screenshotOfDisputeContentAttachmentList = [];
  @ViewChild('screenshotOfContentAttachmentDz') screenshotOfContentAttachmentDz: DropzoneComponent;
  screenshotOfContentAttachmentList = [];
  @ViewChild('screenshotPictureOfDeviceAttachmentDz') screenshotPictureOfDeviceAttachmentDz: DropzoneComponent;
  screenshotPictureOfDeviceAttachmentList = [];
  @ViewChild('photoOfLocationAttachmentDz') photoOfLocationAttachmentDz: DropzoneComponent;
  photoOfLocationAttachmentList = [];
  @ViewChild('frequencyAttachmentDz') frequencyAttachmentDz: DropzoneComponent;
  frequencyAttachmentList = [];
  @ViewChild('rfiComplaintFormAttachmentDz') rfiComplaintFormAttachmentDz: DropzoneComponent;
  rfiComplaintFormAttachmentList = [];
  @ViewChild('rfiScanningRequestFormAttachmentDz') rfiScanningRequestFormAttachmentDz: DropzoneComponent;
  rfiScanningRequestFormAttachmentList = [];
  @ViewChild('voiceRecordingContentRelatedDz') voiceRecordingContentRelatedDz: DropzoneComponent;
  voiceRecordingContentRelatedAttachmentList = [];
  @ViewChild('screenshotOfCallHistoryDz') screenshotOfCallHistoryDz: DropzoneComponent;
  screenshotOfCallHistoryAttachmentList = [];
  @ViewChild('othersAttachmentDz') othersAttachmentDz: DropzoneComponent;
  othersAttachmentList = [];
  public attachmentDzConfig: DropzoneConfigInterface = {
    headers: {
      'X-Auth-Token': this.cookieService.get(environment.tokenName)
    },
    autoProcessQueue: true,
    uploadMultiple: true,
    maxFiles: 20,
    parallelUploads: 20,
    clickable: true,
    url: environment.apiUrl + '/case-attachment/public-upload',
    method: 'POST',
    maxFilesize: 20,
    resizeWidth: 1000
  };
  uploadedAttachmentList = [];

  //Service Provider
  currentServiceProviders = [
    {
      currentServiceProvider: null,
      serviceProviderComplaintID: '',
      actionByServiceProvider: null,
      actionResolutionByServiceProvider: ''
    }
  ];

  //Additional Info
  subscriptionPlanName = null;
  subscriptionPlanType = null;
  accountDetails = null;
  specificInfoDispute = null;
  specificDateInfoDispute = null;
  specificTimeInfoDispute = null;
  imeiNumber = null;
  phoneNumber = null;
  environment = null;
  signalBar = null;
  networkIndicator = null;
  disruptionDate = null;
  disruptionTime = null;
  callerNumber = null;
  receiverNumber = null;
  phoneModel = null;
  networkAvailability = null;
  improvementDate = null;
  remark = null;
  routerModel = null;
  modemModel = null;
  latency = null;
  packetLoss = null;
  tvSettopBoxModel = null;
  parcelValue = null;
  companyName = null;
  companyAddress = null;
  trackingNumber = null;
  specificChannel = null;
  programName = null;
  specificDate = null;
  specificTime = null;
  urlContentInvolved = null;
  userNameIdInvolved = null;
  emailHeader = null;
  emailAddress = null;
  contentOfEmail = null;
  additionalInfoMobileNumber = null;
  userNameIdForMessagingApp = null;
  specificUrlOfTheGroupAccount = null;
  deviceBrand = null;
  deviceModel = null;
  deviceSpecification = null;
  deviceSerialNumber = null;
  specificLinkUrlAddressOfDevice = null;
  pediName = null;

  //Location
  chooseLocation = null;
  typeOfLocation = null;
  typeOfHouseBuilding = null;
  buildingName = null;
  unit = null;
  floor = null;
  block = null;
  lot = null;
  street = null;
  section = null;
  landmark = null;
  postcode = null;
  // city = null;
  cityName = null;
  cityCode = null;
  // district = null;
  districtName = null;
  districtCode = null;
  parliamentName = null;
  parliamentCode = null;
  // state = null;
  stateName = null;
  stateCode = null;
  latitude = 3.140853;
  longitude = 101.693207;

  //Map
  mapType = environment.mapType;
  leafletMap = null;
  mapOptions = {
    layers: [
      tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }
      )
    ],
    zoom: 7,
    center: latLng(4.2105, 101.9758)
  };
  mapLayers = [];
  markers = [];

  //Acknowledgement
  acknowledgement = false;

  //Dropdown
  mcmcRelatedComplaintsList = [];
  typeOfServiceList = [];
  categoryList = [];
  subcategoryList = [];
  platformList = [];
  remedyList = [];
  serviceProviderList = [];
  actionByServiceProviderList = [];
  subscriptionPlanTypeList = [];
  environmentList = [];
  signalBarList = [];
  networkIndicatorList = [];
  latencyList = [];
  // cityList = [];
  // districtList = [];
  // stateList = [];

  //Form Submission Check
  complaintDetailsSubmitted = false;
  additionalAndServiceProviderInfoSubmitted = false;
  locationInfoSubmitted = false;

  //Field Control
  isCityDistrictStateDisabled = true;
  isOnlineContentOtherRemedy = false;

  ngOnInit() {
    let userInfo = this.userService.getUserInfo();
    if(!userInfo.isProfileUpdated) {
      Swal.fire({
        title: 'Oops!',
        html: 'Please update your profile details before creating a case.',
        icon: 'warning',
        confirmButtonColor: '#0087E2',
        confirmButtonText: 'Go to My Profile'
      }).then(result => {
        if(result.value) {
          this.router.navigate(['/home/profile']);
        }
      });
      return;
    }

    if(sessionStorage.getItem('mcmcRelatedComplaints') != null && sessionStorage.getItem('mcmcRelatedComplaints') != ''){
      this.mcmcRelatedComplaintsName = sessionStorage.getItem('mcmcRelatedComplaints');
      sessionStorage.removeItem('mcmcRelatedComplaints');
    }
    this.formField = this.getFormField(this.mcmcRelatedComplaintsName, null, null, null);

    // this.commonItemService.getStates().subscribe((response) => {
    //   this.stateList = response.result;
    //   }
    // );

    this.commonItemService.getPlatforms().subscribe((response) => {
        this.platformList = response.result;
      }
    );

    this.commonItemService.getEnvironments().subscribe((response) => {
        this.environmentList = response.result;
      }
    );

    this.commonItemService.getLatencies().subscribe((response) => {
        this.latencyList = response.result;
      }
    );

    this.commonItemService.getSubsPlanTypes().subscribe((response) => {
        this.subscriptionPlanTypeList = response.result;
      }
    );

    this.commonItemService.getNetworkIndicators().subscribe((response) => {
        this.networkIndicatorList = response.result;
      }
    );

    this.commonItemService.getSignalBars().subscribe((response) => {
        this.signalBarList = response.result;
      }
    );

    this.caseConfigService.getCaseSectors().subscribe((response) => {
        this.mcmcRelatedComplaintsList = response.result;

        if(this.mcmcRelatedComplaintsName != null) {
          for(let item of this.mcmcRelatedComplaintsList) {
            if(item.name == this.mcmcRelatedComplaintsName) {
              this.mcmcRelatedComplaints = item.code;
              break;
            }
          }
        }

        if(this.mcmcRelatedComplaints != null) {
          this.onChangeMcmcRelatedComplaints();
        }
      }
    );

    this.caseConfigService.getCaseServiceProviderActions().subscribe((response) => {
        this.actionByServiceProviderList = response.result;
      }
    );
  }

  getFormField(mcmcRelatedComplaints, typeOfService, category, subcategory) {
    return this.formFieldService.getFormField(mcmcRelatedComplaints, typeOfService, category, subcategory);
  }

  onChangeMcmcRelatedComplaints() {
    this.typeOfService = null;
    this.typeOfServiceName = null;
    this.category = null;
    this.categoryName = null;
    this.subcategory = null;
    this.subcategoryName = null;
    this.currentServiceProvider = null;
    this.remedy = null;
    this.remedyName = null;

    this.typeOfServiceList = [];
    this.categoryList = [];
    this.subcategoryList = [];
    this.remedyList = [];
    this.serviceProviderList = [];

    for(let item of this.mcmcRelatedComplaintsList) {
      if(item.code == this.mcmcRelatedComplaints) {
        this.mcmcRelatedComplaintsName = item.name;
        break;
      }
    }

    this.caseConfigService.getTypesBySector(this.mcmcRelatedComplaints).subscribe((response) => {
        this.typeOfServiceList = response.result;
      }
    );

    this.caseConfigService.getCaseRemediesBySector(this.mcmcRelatedComplaints).subscribe((response) => {
        if(response.isSuccess) {
          this.remedyList = response.result;
        }
      }
    );

    if(this.mcmcRelatedComplaintsName.indexOf('Telecommunication') > -1) {
      this.organizationService.getTelecommunicationOrganization().subscribe((response) => {
          this.serviceProviderList = response.result;
        }
      );
    }
    else if(this.mcmcRelatedComplaintsName.indexOf('Postal & Courier') > -1) {
      this.organizationService.getPostalOrganization().subscribe((response) => {
          this.serviceProviderList = response.result;
        }
      );
    }
    else if(this.mcmcRelatedComplaintsName.indexOf('Broadcasting') > -1) {
      this.organizationService.getBroadcastingOrganization().subscribe((response) => {
          this.serviceProviderList = response.result;
        }
      );
    }

    this.formField = this.getFormField(this.mcmcRelatedComplaintsName, this.typeOfServiceName, this.categoryName, this.subcategoryName);
  }

  onChangeTypeOfService() {
    this.category = null;
    this.categoryName = null;
    this.subcategory = null;
    this.subcategoryName = null;

    this.categoryList = [];
    this.subcategoryList = [];

    for(let item of this.typeOfServiceList) {
      if(item.code == this.typeOfService) {
        this.typeOfServiceName = item.name;
        break;
      }
    }

    this.caseConfigService.getCategoryByType(this.typeOfService).subscribe((response) => {
        this.categoryList = response.result;
      }
    );

    this.formField = this.getFormField(this.mcmcRelatedComplaintsName, this.typeOfServiceName, this.categoryName, this.subcategoryName);
  }

  onChangeCategory() {
    this.subcategory = null;
    this.subcategoryName = null;

    this.subcategoryList = [];

    for(let item of this.categoryList) {
      if(item.code == this.category) {
        this.categoryName = item.name;
        break;
      }
    }

    this.caseConfigService.getSubCategoriesByCategory(this.category).subscribe((response) => {
        this.subcategoryList = response.result;
      }
    );

    this.formField = this.getFormField(this.mcmcRelatedComplaintsName, this.typeOfServiceName, this.categoryName, this.subcategoryName);
  }

  onChangeSubcategory() {
    for(let item of this.subcategoryList) {
      if(item.code == this.subcategory) {
        this.subcategoryName = item.name;
        break;
      }
    }

    this.formField = this.getFormField(this.mcmcRelatedComplaintsName, this.typeOfServiceName, this.categoryName, this.subcategoryName);
  }

  onChangeRemedy(){
    this.isOnlineContentOtherRemedy = false;
    for(let item of this.remedyList) {
      if(item.id == this.remedy) {
        this.remedyName = item.name;
        break;
      }
    }

    if(this.mcmcRelatedComplaintsName.indexOf('Online Content') > -1){
      if(this.remedyName.indexOf("Other") > -1){
        this.remedyName = null;
        this.isOnlineContentOtherRemedy = true;
      }
    }
  }

  getDz(dzName) {
    switch (dzName) {
      case "Screenshot of E-Billing Statement":
        return this.screenshotOfEBillingStatementAttachmentDz;
      case "Screenshot / Soft Copy of Bill Statement":
        return this.screenshotSoftCopyOfBillStatementAttachmentDz;
      case "Photo Copy IC":
        return this.photoCopyICAttachmentDz;
      case "Police Report":
        return this.policeReportAttachmentDz;
      case "Company - Form 9":
        return this.companyForm9AttachmentDz;
      case "Proof of Consent":
        return this.proofOfConsentAttachmentDz;
      case "Proof of Registration":
        return this.proofOfRegistrationAttachmentDz;
      case "Copy of Advertisement":
        return this.copyOfAdvertisementAttachmentDz;
      case "Screenshot of SMS Content Related":
        return this.screenshotOfSmsContentRelatedAttachmentDz;
      case "Statutory Declaration":
        return this.statutoryDeclarationAttachmentDz;
      case "Copy of Registration Form":
        return this.copyOfRegistrationFormAttachmentDz;
      case "Screenshot of Signal Bar and Service":
        return this.screenshotOfSignalBarAndServiceAttachmentDz;
      case "Screenshot of Speed Test":
        return this.screenshotOfSpeedTestAttachmentDz;
      case "Subscription for X Mbps":
        return this.subscriptionForXMbpsAttachmentDz;
      case "Screenshot of Error":
        return this.screenshotOfErrorAttachmentDz;
      case "Copy of Agreement":
        return this.copyOfAgreementAttachmentDz;
      case "Disputed Clause of Agreement":
        return this.disputedClauseOfAgreementAttachmentDz;
      case "Copy of Consignment Note":
        return this.copyOfConsignmentNoteAttachmentDz;
      case "Photo of the Parcel":
        return this.photoOfTheParcelAttachmentDz;
      case "Receipt":
        return this.receiptAttachmentDz;
      case "Photo of Parcel Before Delivery":
        return this.photoOfParcelBeforeDeliveryAttachmentDz;
      case "Photo of Parcel Receive":
        return this.photoOfParcelReceiveAttachmentDz;
      case "Screenshot of Dispute Content":
        return this.screenshotOfDisputeContentAttachmentDz;
      case "Screenshot of Content":
        return this.screenshotOfContentAttachmentDz;
      case "Screenshot / Picture of Device":
        return this.screenshotPictureOfDeviceAttachmentDz;
      case "Photo of Location":
        return this.photoOfLocationAttachmentDz;
      case "Frequency":
        return this.frequencyAttachmentDz;
      case "RFI Complaint Form":
        return this.rfiComplaintFormAttachmentDz;
      case "RFI Scanning Request Form":
        return this.rfiScanningRequestFormAttachmentDz;
      case "Voice Recording Content Related":
        return this.voiceRecordingContentRelatedDz;
      case "Screenshot of Call History":
        return this.screenshotOfCallHistoryDz;
      case "Others":
        return this.othersAttachmentDz;
      default:
        return;
    }
  }

  getDzAttachmentList(dzName) {
    switch (dzName) {
      case "Screenshot of E-Billing Statement":
        return this.screenshotOfEBillingStatementAttachmentList;
      case "Screenshot / Soft Copy of Bill Statement":
        return this.screenshotSoftCopyOfBillStatementAttachmentList;
      case "Photo Copy IC":
        return this.photoCopyICAttachmentList;
      case "Police Report":
        return this.policeReportAttachmentList;
      case "Company - Form 9":
        return this.companyForm9AttachmentList;
      case "Proof of Consent":
        return this.proofOfConsentAttachmentList;
      case "Proof of Registration":
        return this.proofOfRegistrationAttachmentList;
      case "Copy of Advertisement":
        return this.copyOfAdvertisementAttachmentList;
      case "Screenshot of SMS Content Related":
        return this.screenshotOfSmsContentRelatedAttachmentList;
      case "Statutory Declaration":
        return this.statutoryDeclarationAttachmentList;
      case "Copy of Registration Form":
        return this.copyOfRegistrationFormAttachmentList;
      case "Screenshot of Signal Bar and Service":
        return this.screenshotOfSignalBarAndServiceAttachmentList;
      case "Screenshot of Speed Test":
        return this.screenshotOfSpeedTestAttachmentList;
      case "Subscription for X Mbps":
        return this.subscriptionForXMbpsAttachmentList;
      case "Screenshot of Error":
        return this.screenshotOfErrorAttachmentList;
      case "Copy of Agreement":
        return this.copyOfAgreementAttachmentList;
      case "Disputed Clause of Agreement":
        return this.disputedClauseOfAgreementAttachmentList;
      case "Copy of Consignment Note":
        return this.copyOfConsignmentNoteAttachmentList;
      case "Photo of the Parcel":
        return this.photoOfTheParcelAttachmentList;
      case "Receipt":
        return this.receiptAttachmentList;
      case "Photo of Parcel Before Delivery":
        return this.photoOfParcelBeforeDeliveryAttachmentList;
      case "Photo of Parcel Receive":
        return this.photoOfParcelReceiveAttachmentList;
      case "Screenshot of Dispute Content":
        return this.screenshotOfDisputeContentAttachmentList;
      case "Screenshot of Content":
        return this.screenshotOfContentAttachmentList;
      case "Screenshot / Picture of Device":
        return this.screenshotPictureOfDeviceAttachmentList;
      case "Photo of Location":
        return this.photoOfLocationAttachmentList;
      case "Frequency":
        return this.frequencyAttachmentList;
      case "RFI Complaint Form":
        return this.rfiComplaintFormAttachmentList;
      case "RFI Scanning Request Form":
        return this.rfiScanningRequestFormAttachmentList;
      case "Voice Recording Content Related":
        return this.voiceRecordingContentRelatedAttachmentList;
      case "Screenshot of Call History":
        return this.screenshotOfCallHistoryAttachmentList;
      case "Others":
        return this.othersAttachmentList;
      default:
        return;
    }
  }

  triggerAttachmentDz(dzName) {
    let dz = this.getDz(dzName);
    let el = dz.directiveRef.dropzone().element;
    setTimeout(() => { el.click();},100);
  }

  onAttachmentDzSending(event, dzName){
    const formData = event[2];
    formData.append("documentType", dzName);
  }

  onAttachmentDzUploadSuccess(event, dzName) {
    let uploadedFiles = event[1].result;
    let list = this.getDzAttachmentList(dzName);
    for(let uploadedFile of uploadedFiles){
      list.push(uploadedFile);
      this.uploadedAttachmentList.push(uploadedFile.caseAttachmentUUID);
    }
    this.resetAttachmentDz(dzName);
  }

  onAttachmentDzUploadFailed(event, dzName) {
    this.resetAttachmentDz(dzName);
  }

  resetAttachmentDz(dzName) {
    let dz = this.getDz(dzName);
    dz.directiveRef.reset();
    dz.directiveRef.dropzone();
  }

  loadAttachment(item) {
    this.attachmentloaderService.load(item, 'caseAttachment');
  }

  removeAttachment(item, dzName) {
    let list = this.getDzAttachmentList(dzName);
    for(let i=0; i<list.length; i++) {
      if (list[i].caseAttachmentUUID == item.caseAttachmentUUID) {
        list.splice(i, 1);
      }
    }
    for(let i=0; i<this.uploadedAttachmentList.length; i++) {
      if (this.uploadedAttachmentList[i] == item.caseAttachmentUUID) {
        this.uploadedAttachmentList.splice(i, 1);
      }
    }
  }

  async completeComplaintSection() {
    this.complaintDetailsSubmitted = true;

    await this.fieldCheckService.fieldCheck().then((proceed) => {
      if(proceed){
        this.nav1ActiveId = 2;
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Oops!',
          text: 'Please complete the required field(s).'
        });
      }
    });
  }

  async completeAdditionalAndServiceProviderInfo() {
    this.additionalAndServiceProviderInfoSubmitted = true;

    await this.fieldCheckService.fieldCheck().then((proceed) => {
      if(proceed){
        this.nav2ActiveId = 2;
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Oops!',
          text: 'Please complete the required field(s).'
        });
      }
    });
  }

  onMapReady(map: Map) {
    this.leafletMap = map;
    setTimeout(() => {
      this.leafletMap.invalidateSize();
    }, 0);
  }

  // onChangeState() {
  //   this.city = null;
  //   this.cityName = null;
  //   this.district = null;
  //   this.districtName = null;
  //
  //   this.cityList = [];
  //   this.districtList = [];
  //
  //   for(let item of this.stateList) {
  //     if(item.id == this.state) {
  //       this.stateName = item.name;
  //       break;
  //     }
  //   }
  //
  //   this.commonItemService.getCitiesByState(this.state).subscribe((response) => {
  //       this.cityList = response.result;
  //     }
  //   );
  // }
  //
  // onChangeDistrict() {
  //   for(let item of this.districtList) {
  //     if(item.id == this.district) {
  //       this.districtName = item.name;
  //       break;
  //     }
  //   }
  // }
  //
  // onChangeCity() {
  //   for(let item of this.cityList) {
  //     if(item.id == this.city) {
  //       this.cityName = item.name;
  //       break;
  //     }
  //   }
  // }

  async completeLocationInfo() {
    this.locationInfoSubmitted = true;

    await this.fieldCheckService.fieldCheck().then((proceed) => {
      if(proceed){
        this.createCase();
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Oops!',
          text: 'Please complete the required field(s).'
        });
      }
    });
  }

  doGeocoding() {
    if((this.street == null || this.street.trim() == '')
      && (this.postcode == null || this.postcode.trim() == '')) {
      return;
    }

    let address = '';
    if(this.street != null) {
      address += this.street;
    }
    if(this.street != null && this.postcode != null) {
      address += ',';
    }
    if(this.postcode != null) {
      address += this.postcode;
    }
    this.spinner.show();
    this.osmService.geocoding(address).subscribe((response) => {
        console.log(response);
        if(response && response.length > 0) {
          this.latitude = response[0].lat;
          this.longitude = response[0].lon;

          if(this.mapType == 'leaflet') {
            this.leafletMap.flyTo([this.latitude, this.longitude], 15)
            this.mapLayers = [marker([this.latitude, this.longitude], {
              icon: icon({
                iconSize: [ 25, 41 ],
                iconAnchor: [ 13, 41 ],
                iconUrl: 'leaflet/marker-icon.png',
                shadowUrl: 'leaflet/marker-shadow.png'
              })
            })];
          }
          else if(this.mapType == 'google') {
            this.markers = [
              { latitude: this.latitude, longitude: this.longitude }
            ];
          }

          let form = {
            x: this.latitude,
            y: this.longitude
          }
          this.jendelaService.getAddress(form).subscribe((response) => {
            console.log(response);
            this.spinner.hide();
            if(response.error != null) {
              console.log("jendela API returned error");
              console.log(response.error);
              this.isCityDistrictStateDisabled = false;
            }
            else if(response.results.length == 0){
              console.log("no address found from jendela API.");
              this.isCityDistrictStateDisabled = false;
            }
            else {
              this.stateName = response.results[0].state;
              this.stateCode = response.results[0].state_code;
              this.parliamentName = response.results[0].parliament;
              this.parliamentCode = response.results[0].parliament_code;
              this.districtName = response.results[0].district;
              this.districtCode = response.results[0].district_code;
              this.cityName = response.results[0].mukim;
              this.cityCode = response.results[0].mukim_code;
            }
          }, (err) => {
            this.spinner.hide();
            console.log("jendela API error");
            console.log(err);
            this.isCityDistrictStateDisabled = false;
          });
        }
        else {
          this.spinner.hide();
          console.log("no coordinate found from osm API.");
          this.isCityDistrictStateDisabled = false;
        }
      }, (err) => {
        this.spinner.hide();
        console.log("osm API error");
        console.log(err);
        this.isCityDistrictStateDisabled = false;
      });
  }

  createCase() {
    let form = {};
    form['isOnBehalf'] = this.onBehalf;
    form['caseSectorCode'] = this.mcmcRelatedComplaints;
    form['caseTypeCode'] = this.typeOfService;
    form['caseCategoryCode'] = this.category;
    form['caseSubCategoryCode'] = this.subcategory;
    form['platform'] = this.platform;
    form['caseRemedyId'] = this.remedy;
    form['caseRemedyName'] = this.remedyName;
    form['description'] = this.description;

    if(this.onBehalf) {
      let complainantInfo = {};
      complainantInfo['complainantName'] = this.onBehalfName;
      complainantInfo['complainantMobileNo'] = this.onBehalfMobileNumber;
      complainantInfo['complainantEmail'] = this.onBehalfEmail;
      form['complainantInfo'] = complainantInfo;
    }

    if(this.formField.showServiceProviderSection) {
      let serviceProviderInfo = {};
      serviceProviderInfo['currentSpUUID'] = this.currentServiceProviders[0].currentServiceProvider;
      serviceProviderInfo['spComplaintCaseId'] = this.currentServiceProviders[0].serviceProviderComplaintID;
      serviceProviderInfo['spActionId'] = this.currentServiceProviders[0].actionByServiceProvider;
      serviceProviderInfo['resolution'] = this.currentServiceProviders[0].actionResolutionByServiceProvider;
      form['serviceProviderInfo'] = serviceProviderInfo;
    }

    let postalCourierInfo = {};
    let broadcastingInfo = {};
    let onlineContentInfo = {};
    let telecommunicationInfo = {};
    let mcmcProvisionInfo = {};
    if(this.mcmcRelatedComplaintsName.indexOf('Postal & Courier') > -1) {
      postalCourierInfo['parcelValue'] = this.parcelValue;
      postalCourierInfo['companyName'] = this.companyName;
      postalCourierInfo['companyAddress'] = this.companyAddress;
      postalCourierInfo['trackingNo'] = this.trackingNumber;
      form['postalCourierInfo'] = postalCourierInfo;
    }
    else if(this.mcmcRelatedComplaintsName.indexOf('Broadcasting') > -1) {
      broadcastingInfo['subscriptionPlanName'] = this.subscriptionPlanName;
      broadcastingInfo['subscriptionPlanType'] = this.subscriptionPlanType;
      broadcastingInfo['specificChannel'] = this.specificChannel;
      broadcastingInfo['programName'] = this.programName;
      if(this.specificDate != null && this.specificTime != null) {
        let specificDateTime = new Date(this.specificDate + ' ' + this.specificTime);
        broadcastingInfo['specificDate'] = specificDateTime;
        broadcastingInfo['specificTime'] = specificDateTime;
      }
      broadcastingInfo['accountDetail'] = this.accountDetails;
      if(this.disruptionDate != null && this.disruptionTime != null) {
        let disruptionDateTime = new Date(this.disruptionDate + ' ' + this.disruptionTime);
        broadcastingInfo['disruptionDate'] = disruptionDateTime;
        broadcastingInfo['disruptionTime'] = disruptionDateTime;
      }
      broadcastingInfo['networkAvailability'] = this.networkAvailability;
      if(this.improvementDate != null) {
        broadcastingInfo['improvementDate'] = new Date(this.improvementDate);
      }
      broadcastingInfo['remark'] = this.remark;
      form['broadcastingInfo'] = broadcastingInfo;
    }
    else if(this.mcmcRelatedComplaintsName.indexOf('Online Content') > -1) {
      onlineContentInfo['platform'] = this.platform;
      onlineContentInfo['urlInvolved'] = this.urlContentInvolved;
      onlineContentInfo['userNameUserIdInvolved'] = this.userNameIdInvolved;
      onlineContentInfo['emailHeader'] = this.emailHeader;
      onlineContentInfo['emailAddress'] = this.emailAddress;
      onlineContentInfo['emailContent'] = this.contentOfEmail;
      onlineContentInfo['mobileNo'] = this.additionalInfoMobileNumber;
      form['onlineContentInfo'] = onlineContentInfo;
    }
    else if(this.mcmcRelatedComplaintsName.indexOf('Telecommunication') > -1) {
      telecommunicationInfo['subscriptionPlanName'] = this.subscriptionPlanName;
      telecommunicationInfo['subscriptionPlanType'] = this.subscriptionPlanType;
      telecommunicationInfo['accountDetail'] = this.accountDetails;
      telecommunicationInfo['specificInfo'] = this.specificInfoDispute;
      if(this.specificDateInfoDispute != null && this.specificTimeInfoDispute != null) {
        let specificDateTimeInfoDispute = new Date(this.specificDateInfoDispute + ' ' + this.specificTimeInfoDispute);
        telecommunicationInfo['specificDate'] = specificDateTimeInfoDispute;
        telecommunicationInfo['specificTime'] = specificDateTimeInfoDispute;
      }
      telecommunicationInfo['imeiNo'] = this.imeiNumber;
      telecommunicationInfo['phoneNo'] = this.phoneNumber;
      telecommunicationInfo['callerPhoneNo'] = this.callerNumber;
      telecommunicationInfo['receiverPhoneNo'] = this.receiverNumber;
      telecommunicationInfo['environment'] = this.environment;
      telecommunicationInfo['signalBar'] = this.signalBar;
      telecommunicationInfo['networkIndicator'] = this.networkIndicator;
      if(this.disruptionDate != null && this.disruptionTime != null) {
        let disruptionDateTime = new Date(this.disruptionDate + ' ' + this.disruptionTime);
        telecommunicationInfo['disruptionDate'] = disruptionDateTime;
        telecommunicationInfo['disruptionTime'] = disruptionDateTime;
      }
      telecommunicationInfo['phoneModel'] = this.phoneModel;
      telecommunicationInfo['tvSetBoxModel'] = this.tvSettopBoxModel;
      telecommunicationInfo['routerModel'] = this.routerModel;
      telecommunicationInfo['modemModel'] = this.modemModel;
      telecommunicationInfo['latency'] = this.latency;
      telecommunicationInfo['packetLoss'] = this.packetLoss;
      telecommunicationInfo['networkAvailability'] = this.networkAvailability;
      telecommunicationInfo['improvementDate'] = this.improvementDate;
      telecommunicationInfo['remark'] = this.remark;
      form['telecommunicationInfo'] = telecommunicationInfo;
    }
    else if(this.mcmcRelatedComplaintsName.indexOf('MCMC Provision') > -1) {
      mcmcProvisionInfo['deviceBrand'] = this.deviceBrand;
      mcmcProvisionInfo['deviceModel'] = this.deviceModel;
      mcmcProvisionInfo['deviceSpec'] = this.deviceSpecification;
      mcmcProvisionInfo['deviceSerialNo'] = this.deviceSerialNumber;
      mcmcProvisionInfo['specificLinkOfDevice'] = this.specificLinkUrlAddressOfDevice;
      mcmcProvisionInfo['PEDiName'] = this.pediName;
      form['mcmcProvisionInfo'] = mcmcProvisionInfo;
    }

    if(this.formField.showLocationDetailsSection) {
      if(this.chooseLocation != null) {
        form['isSameAddress'] = !this.chooseLocation;
        if(this.chooseLocation) {
          let locationInfo = {};
          locationInfo['locationType'] = this.typeOfLocation;
          locationInfo['buildingType'] = this.typeOfHouseBuilding;
          locationInfo['buildingName'] = this.buildingName;
          locationInfo['unitNo'] = this.unit;
          locationInfo['floorNo'] = this.floor;
          locationInfo['block'] = this.block;
          locationInfo['lot'] = this.lot;
          locationInfo['street'] = this.street;
          locationInfo['section'] = this.section;
          locationInfo['landmark'] = this.landmark;
          locationInfo['postcode'] = this.postcode;
          // locationInfo['cityId'] = this.city;
          locationInfo['cityName'] = this.cityName;
          locationInfo['cityCode'] = this.cityCode;
          // locationInfo['districtId'] = this.district;
          locationInfo['districtName'] = this.districtName;
          locationInfo['districtCode'] = this.districtCode;
          locationInfo['parliamentName'] = this.parliamentName;
          locationInfo['parliamentCode'] = this.parliamentCode;
          // locationInfo['stateId'] = this.state;
          locationInfo['stateName'] = this.stateName;
          locationInfo['stateCode'] = this.stateCode;
          locationInfo['latitude'] = this.latitude;
          locationInfo['longitude'] = this.longitude;
          form['locationInfo'] = locationInfo;
        }
      }
    }
    form['attachmentUUID'] = this.uploadedAttachmentList;

    console.log(form);

    this.spinner.show();
    this.caseService.createCaseByPublic(form).subscribe((response) => {
        this.spinner.hide();
        if(response.isSuccess) {
          Swal.fire({
            title: 'Success!',
            html: 'You have successfully submitted.<br>Your complaint will be processed within 7-14 working days.',
            icon: 'success',
            confirmButtonColor: '#0087E2',
            confirmButtonText: 'View Case'
          }).then(result => {
            if(result.value) {
              this.router.navigate(['/home/casedetails/' + response.result]);
            }
          });
        }
        else {
          Swal.fire({
            icon: 'warning',
            title: 'Oops!',
            text: 'An error has occurred.'
          });
        }
      }
    );
  }

}
