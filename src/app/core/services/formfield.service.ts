// @ts-nocheck

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FormfieldService {

  formField = {
    //Complaint Details - Show
    showSubcategory: false,
    showPlatform: false,
    showDisclaimer: false,
    showRemedy: false,

    //Attachment - Show
    showScreenshotOfEBillingStatement: false,
    showScreenshotSoftCopyOfBillStatement: false,
    showPhotoCopyIC: false,
    showPoliceReport: false,
    showCompanyForm9: false,
    showProofOfConsent: false,
    showProofOfRegistration: false,
    showCopyOfAdvertisement: false,
    showScreenshotOfSmsContentRelated: false,
    showStatutoryDeclaration: false,
    showCopyOfRegistrationForm: false,
    showScreenshotOfSignalBarAndService: false,
    showScreenshotOfSpeedTest: false,
    showSubscriptionForXMbps: false,
    showScreenshotOfError: false,
    showCopyOfAgreement: false,
    showDisputedClauseOfAgreement: false,
    showCopyOfConsignmentNote: false,
    showPhotoOfTheParcel: false,
    showReceipt: false,
    showPhotoOfParcelBeforeDelivery: false,
    showPhotoOfParcelReceive: false,
    showScreenshotOfDisputeContent: false,
    showScreenshotOfContent: false,
    showScreenshotPictureOfDevice: false,
    showPhotoOfLocation: false,
    showFrequency: false,
    showRfiComplaintForm: false,
    showRfiScanningRequestForm: false,
    showVoiceRecordingContentRelated: false,
    showScreenshotOfCallHistory: false,

    //Attachment - Mandatory
    screenshotOfSignalBarAndServiceMandatory: false,
    screenshotOfSpeedTestMandatory: false,
    subscriptionForXMbpsMandatory: false,
    screenshotOfErrorMandatory: false,
    proofOfConsentMandatory: false,
    proofOfRegistrationMandatory: false,
    copyOfAdvertisementMandatory: false,
    screenshotOfSmsContentRelatedMandatory: false,
    copyOfConsignmentNoteMandatory: false,
    photoOfTheParcelMandatory: false,
    receiptMandatory: false,
    photoOfParcelBeforeDeliveryMandatory: false,
    photoOfParcelReceiveMandatory: false,

    //Service Provider Section - Show
    showServiceProviderSection: false,

    //Additional Info - Show
    showSubscriptionPlanName: false,
    showSubscriptionPlanType: false,
    showAccountDetails: false,
    showSpecificInfoDispute: false,
    showSpecificDateInfoDispute: false,
    showSpecificTimeInfoDispute: false,
    showImeiNumber: false,
    showPhoneNumber: false,
    showEnvironment: false,
    showSignalBar: false,
    showNetworkIndicator: false,
    showDisruptionDate: false,
    showDisruptionTime: false,
    showCallerNumber: false,
    showReceiverNumber: false,
    showPhoneModel: false,
    showNetworkAvailability: false,
    showImprovementDate: false,
    showRemark: false,
    showRouterModel: false,
    showModemModel: false,
    showLatency: false,
    showPacketLoss: false,
    showTvSettopBoxModel: false,
    showParcelValue: false,
    showCompanyName: false,
    showCompanyAddress: false,
    showTrackingNumber: false,
    showSpecificChannel: false,
    showProgramName: false,
    showSpecificDate: false,
    showSpecificTime: false,
    showUrlContentInvolved: false,
    showUserNameIdInvolved: false,
    showEmailHeader: false,
    showEmailAddress: false,
    showContentOfEmail: false,
    showAdditionalInfoMobileNumber: false,
    showUserNameIdForMessagingApp: false,
    showSpecificUrlOfTheGroupAccount: false,
    showDeviceBrand: false,
    showDeviceModel: false,
    showDeviceSpecification: false,
    showDeviceSerialNumber: false,
    showSpecificLinkUrlAddressOfDevice: false,
    showPediName: false,

    //Additional Info - Mandatory
    subscriptionPlanNameMandatory: false,
    subscriptionPlanTypeMandatory: false,
    accountDetailsMandatory: false,
    environmentMandatory: false,
    signalBarMandatory: false,
    networkIndicatorMandatory: false,
    disruptionDateMandatory: false,
    disruptionTimeMandatory: false,
    callerNumberMandatory: false,
    routerModelMandatory: false,
    tvSettopBoxModelMandatory: false,
    parcelValueMandatory: false,
    companyNameMandatory: false,
    companyAddressMandatory: false,
    trackingNumberMandatory: false,
    specificChannelMandatory: false,
    programNameMandatory: false,
    specificDateMandatory: false,
    specificTimeMandatory: false,

    //Additional & Service Provider Info Section - Show
    showAdditionalAndServiceProviderInfoSection: false,

    //Location Section - Show
    showLocationDetailsSection: false
  }

  constructor() { }

  resetFormField() {
    //Complaint Details - Show
    this.formField.showSubcategory = false;
    this.formField.showPlatform = false;
    this.formField.showDisclaimer = false;
    this.formField.showRemedy = false;

    //Attachment - Show
    this.formField.showScreenshotOfEBillingStatement = false;
    this.formField.showScreenshotSoftCopyOfBillStatement = false;
    this.formField.showPhotoCopyIC = false;
    this.formField.showPoliceReport = false;
    this.formField.showCompanyForm9 = false;
    this.formField.showProofOfConsent = false;
    this.formField.showProofOfRegistration = false;
    this.formField.showCopyOfAdvertisement = false;
    this.formField.showScreenshotOfSmsContentRelated = false;
    this.formField.showStatutoryDeclaration = false;
    this.formField.showCopyOfRegistrationForm = false;
    this.formField.showScreenshotOfSignalBarAndService = false;
    this.formField.showScreenshotOfSpeedTest = false;
    this.formField.showSubscriptionForXMbps = false;
    this.formField.showScreenshotOfError = false;
    this.formField.showCopyOfAgreement = false;
    this.formField.showDisputedClauseOfAgreement = false;
    this.formField.showCopyOfConsignmentNote = false;
    this.formField.showPhotoOfTheParcel = false;
    this.formField.showReceipt = false;
    this.formField.showPhotoOfParcelBeforeDelivery = false;
    this.formField.showPhotoOfParcelReceive = false;
    this.formField.showScreenshotOfDisputeContent = false;
    this.formField.showScreenshotOfContent = false;
    this.formField.showScreenshotPictureOfDevice = false;
    this.formField.showPhotoOfLocation = false;
    this.formField.showFrequency = false;
    this.formField.showRfiComplaintForm = false;
    this.formField.showRfiScanningRequestForm = false;
    this.formField.showVoiceRecordingContentRelated = false;
    this.formField.showScreenshotOfCallHistory = false;

    //Attachment - Mandatory
    this.formField.screenshotOfSignalBarAndServiceMandatory = false;
    this.formField.screenshotOfSpeedTestMandatory = false;
    this.formField.subscriptionForXMbpsMandatory = false;
    this.formField.screenshotOfErrorMandatory = false;
    this.formField.proofOfConsentMandatory = false;
    this.formField.proofOfRegistrationMandatory = false;
    this.formField.copyOfAdvertisementMandatory = false;
    this.formField.screenshotOfSmsContentRelatedMandatory = false;
    this.formField.copyOfConsignmentNoteMandatory = false;
    this.formField.photoOfTheParcelMandatory = false;
    this.formField.receiptMandatory = false;
    this.formField.photoOfParcelBeforeDeliveryMandatory = false;
    this.formField.photoOfParcelReceiveMandatory = false;

    //Service Provider Section - Show
    this.formField.showServiceProviderSection = false;

    //Additional Info - Show
    this.formField.showSubscriptionPlanName = false;
    this.formField.showSubscriptionPlanType = false;
    this.formField.showAccountDetails = false;
    this.formField.showSpecificInfoDispute = false;
    this.formField.showSpecificDateInfoDispute = false;
    this.formField.showSpecificTimeInfoDispute = false;
    this.formField.showImeiNumber = false;
    this.formField.showPhoneNumber = false;
    this.formField.showEnvironment = false;
    this.formField.showSignalBar = false;
    this.formField.showNetworkIndicator = false;
    this.formField.showDisruptionDate = false;
    this.formField.showDisruptionTime = false;
    this.formField.showCallerNumber = false;
    this.formField.showReceiverNumber = false;
    this.formField.showPhoneModel = false;
    this.formField.showNetworkAvailability = false;
    this.formField.showImprovementDate = false;
    this.formField.showRemark = false;
    this.formField.showRouterModel = false;
    this.formField.showModemModel = false;
    this.formField.showLatency = false;
    this.formField.showPacketLoss = false;
    this.formField.showTvSettopBoxModel = false;
    this.formField.showParcelValue = false;
    this.formField.showCompanyName = false;
    this.formField.showCompanyAddress = false;
    this.formField.showTrackingNumber = false;
    this.formField.showSpecificChannel = false;
    this.formField.showProgramName = false;
    this.formField.showSpecificDate = false;
    this.formField.showSpecificTime = false;
    this.formField.showUrlContentInvolved = false;
    this.formField.showUserNameIdInvolved = false;
    this.formField.showEmailHeader = false;
    this.formField.showEmailAddress = false;
    this.formField.showContentOfEmail = false;
    this.formField.showAdditionalInfoMobileNumber = false;
    this.formField.showUserNameIdForMessagingApp = false;
    this.formField.showSpecificUrlOfTheGroupAccount = false;
    this.formField.showDeviceBrand = false;
    this.formField.showDeviceModel = false;
    this.formField.showDeviceSpecification = false;
    this.formField.showDeviceSerialNumber = false;
    this.formField.showSpecificLinkUrlAddressOfDevice = false;
    this.formField.showPediName = false;

    //Additional Info - Mandatory
    this.formField.subscriptionPlanNameMandatory = false;
    this.formField.subscriptionPlanTypeMandatory = false;
    this.formField.accountDetailsMandatory = false;
    this.formField.environmentMandatory = false;
    this.formField.signalBarMandatory = false;
    this.formField.networkIndicatorMandatory = false;
    this.formField.disruptionDateMandatory = false;
    this.formField.disruptionTimeMandatory = false;
    this.formField.callerNumberMandatory = false;
    this.formField.routerModelMandatory = false;
    this.formField.tvSettopBoxModelMandatory = false;
    this.formField.parcelValueMandatory = false;
    this.formField.companyNameMandatory = false;
    this.formField.companyAddressMandatory = false;
    this.formField.trackingNumberMandatory = false;
    this.formField.specificChannelMandatory = false;
    this.formField.programNameMandatory = false;
    this.formField.specificDateMandatory = false;
    this.formField.specificTimeMandatory = false;

    //Additional & Service Provider Info Section - Show
    this.formField.showAdditionalAndServiceProviderInfoSection = false;

    //Location Section - Show
    this.formField.showLocationDetailsSection = false;
  }

  getFormField(mcmcRelatedComplaints, typeOfService, category, subcategory) {
    this.resetFormField();

    //Telecommunication
    if(mcmcRelatedComplaints == 'Telecommunication') {
      this.formField.showRemedy = true;
      if(typeOfService == 'Cellular Services') {
        if(category == 'Bill & Charge') {
          this.formField.showScreenshotOfEBillingStatement = true;
          this.formField.showScreenshotSoftCopyOfBillStatement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showSpecificInfoDispute = true;
          this.formField.showSpecificDateInfoDispute = true;
          this.formField.showSpecificTimeInfoDispute = true;
        }
        else if(category == 'IMEI') {
          this.formField.showPhotoCopyIC = true;
          this.formField.showPoliceReport = true;
          this.formField.showCompanyForm9 = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showImeiNumber = true;
          this.formField.showPhoneNumber = true;
        }
        else if(category == 'Misrepresentation Of Service') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAdvertisement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Pricing') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Service Delivery') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'SMS Service') {
          this.formField.showScreenshotOfSmsContentRelated = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Terms & Conditions Disputes') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Unfair Practice') {
          this.formField.showPhotoCopyIC = true;
          this.formField.showPoliceReport = true;
          this.formField.showStatutoryDeclaration = true;
          this.formField.showCopyOfRegistrationForm = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Network') {
          this.formField.showScreenshotOfSignalBarAndService = true;
          this.formField.screenshotOfSignalBarAndServiceMandatory = true;
          this.formField.showEnvironment = true;
          this.formField.environmentMandatory = true;
          this.formField.showSignalBar = true;
          this.formField.signalBarMandatory = true;
          this.formField.showNetworkIndicator = true;
          this.formField.networkIndicatorMandatory = true;
          this.formField.showDisruptionDate = true;
          this.formField.disruptionDateMandatory = true;
          this.formField.showDisruptionTime = true;
          this.formField.disruptionTimeMandatory = true;
          this.formField.showCallerNumber = true;
          this.formField.callerNumberMandatory = true;
          this.formField.showReceiverNumber = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showPhoneModel = true;
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
      }
      else if(typeOfService == 'Copper / DSL Services') {
        if(category == 'Network') {
          this.formField.showScreenshotOfSpeedTest = true;
          this.formField.screenshotOfSpeedTestMandatory = true;
          this.formField.showScreenshotOfSignalBarAndService = true;
          this.formField.screenshotOfSignalBarAndServiceMandatory = true;
          this.formField.showSubscriptionForXMbps = true;
          this.formField.subscriptionForXMbpsMandatory = true;
          this.formField.showScreenshotOfError = true;
          this.formField.screenshotOfErrorMandatory = true;
          this.formField.showDisruptionDate = true;
          this.formField.disruptionDateMandatory = true;
          this.formField.showDisruptionTime = true;
          this.formField.disruptionTimeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showRouterModel = true;
          this.formField.routerModelMandatory = true;
          this.formField.showModemModel = true;
          this.formField.showLatency = true;
          this.formField.showPacketLoss = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
        else if(category == 'Misrepresentation Of Service') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAdvertisement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Pricing') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Service Delivery') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Terms & Conditions Disputes') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAgreement = true;
          this.formField.showDisputedClauseOfAgreement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
      }
      else if(typeOfService == 'Fibre Services') {
        if(category == 'Misrepresentation Of Service') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAdvertisement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Network') {
          this.formField.showScreenshotOfSpeedTest = true;
          this.formField.screenshotOfSpeedTestMandatory = true;
          this.formField.showScreenshotOfSignalBarAndService = true;
          this.formField.screenshotOfSignalBarAndServiceMandatory = true;
          this.formField.showSubscriptionForXMbps = true;
          this.formField.subscriptionForXMbpsMandatory = true;
          this.formField.showScreenshotOfError = true;
          this.formField.screenshotOfErrorMandatory = true;
          this.formField.showDisruptionDate = true;
          this.formField.disruptionDateMandatory = true;
          this.formField.showDisruptionTime = true;
          this.formField.disruptionTimeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showRouterModel = true;
          this.formField.showModemModel = true;
          this.formField.showLatency = true;
          this.formField.showPacketLoss = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
        else if(category == 'Pricing') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Service Delivery') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Terms & Conditions Disputes') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAgreement = true;
          this.formField.showDisputedClauseOfAgreement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
      }
      else if(typeOfService == 'Fixed Line Services') {
        if(category == 'Network') {
          this.formField.showScreenshotOfError = true;
          this.formField.showDisruptionDate = true;
          this.formField.disruptionDateMandatory = true;
          this.formField.showDisruptionTime = true;
          this.formField.disruptionTimeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showPhoneModel = true;
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
      }
      else if(typeOfService == 'Free to Air TV Services') {
        if(category == 'Network') {
          this.formField.showScreenshotOfError = true;
          this.formField.showDisruptionDate = true;
          this.formField.disruptionDateMandatory = true;
          this.formField.showDisruptionTime = true;
          this.formField.disruptionTimeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showTvSettopBoxModel = true;
          this.formField.tvSettopBoxModelMandatory = true;
          this.formField.showModemModel = true;
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
      }
      else if(typeOfService == 'IP Telephony') {
        if(category == 'Misrepresentation Of Service') {
          this.formField.showProofOfConsent = true;
          this.formField.proofOfConsentMandatory = true;
          this.formField.showProofOfRegistration = true;
          this.formField.proofOfRegistrationMandatory = true;
          this.formField.showCopyOfAdvertisement = true;
          this.formField.copyOfAdvertisementMandatory = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Network') {
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
        else if(category == 'Pricing') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Service Delivery') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Terms & Conditions Disputes') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAgreement = true;
          this.formField.showDisputedClauseOfAgreement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
      }
      else if(typeOfService == 'Pay TV Services') {
        if(category == 'Network') {
          this.formField.showScreenshotOfError = true;
          this.formField.showDisruptionDate = true;
          this.formField.disruptionDateMandatory = true;
          this.formField.showDisruptionTime = true;
          this.formField.disruptionTimeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showTvSettopBoxModel = true;
          this.formField.tvSettopBoxModelMandatory = true;
          this.formField.showModemModel = true;
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
      }
      else if(typeOfService == 'Public Phone') {
        if(category == 'Network') {
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
      }
      else if(typeOfService == 'Satellite Services') {
        if(category == 'Misrepresentation Of Service') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAdvertisement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Network') {
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
        else if(category == 'Pricing') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Service Delivery') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Terms & Conditions Disputes') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAgreement = true;
          this.formField.showDisputedClauseOfAgreement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
      }
      else if(typeOfService == 'Wireless Services') {
        if(category == 'Misrepresentation Of Service') {
          this.formField.showProofOfConsent = true;
          this.formField.proofOfConsentMandatory = true;
          this.formField.showProofOfRegistration = true;
          this.formField.proofOfRegistrationMandatory = true;
          this.formField.showCopyOfAdvertisement = true;
          this.formField.copyOfAdvertisementMandatory = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
        else if(category == 'Network') {
          this.formField.showScreenshotOfSpeedTest = true;
          this.formField.showScreenshotOfSignalBarAndService = true;
          this.formField.showSubscriptionForXMbps = true;
          this.formField.showScreenshotOfError = true;
          this.formField.screenshotOfErrorMandatory = true;
          this.formField.showEnvironment = true;
          this.formField.environmentMandatory = true;
          this.formField.showSignalBar = true;
          this.formField.signalBarMandatory = true;
          this.formField.showNetworkIndicator = true;
          this.formField.networkIndicatorMandatory = true;
          this.formField.showDisruptionDate = true;
          this.formField.disruptionDateMandatory = true;
          this.formField.showDisruptionTime = true;
          this.formField.disruptionTimeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
          this.formField.showPhoneModel = true;
          this.formField.showLatency = true;
          this.formField.showPacketLoss = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showNetworkAvailability = true;
          this.formField.showImprovementDate = true;
          this.formField.showRemark = true;
        }
        else if(category == 'Pricing') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Service Delivery') {
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
        }
        else if(category == 'Terms & Conditions Disputes') {
          this.formField.showProofOfConsent = true;
          this.formField.showProofOfRegistration = true;
          this.formField.showCopyOfAgreement = true;
          this.formField.showDisputedClauseOfAgreement = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showAccountDetails = true;
          this.formField.accountDetailsMandatory = true;
        }
      }
      this.formField.showServiceProviderSection = true;
      this.formField.showLocationDetailsSection = true;
    }

    //Postal & Courier
    else if(mcmcRelatedComplaints == 'Postal & Courier') {
      this.formField.showRemedy = true;
      if(typeOfService == 'Postal/Courier Services') {
        if(category == 'Illegal Provider') {
          this.formField.showCopyOfConsignmentNote = true;
          this.formField.copyOfConsignmentNoteMandatory = true;
          this.formField.showPhotoOfTheParcel = true;
          this.formField.photoOfTheParcelMandatory = true;
          this.formField.showParcelValue = true;
          this.formField.parcelValueMandatory = true;
          this.formField.showCompanyName = true;
          this.formField.companyNameMandatory = true;
          this.formField.showCompanyAddress = true;
          this.formField.companyAddressMandatory = true;
          this.formField.showTrackingNumber = true;
          this.formField.trackingNumberMandatory = true;
        }
        else if(category == 'Charge') {
          this.formField.showParcelValue = true;
          this.formField.parcelValueMandatory = true;
          this.formField.showReceipt = true;
          this.formField.receiptMandatory = true;
        }
        else if(category == 'Postal & Courier Service Delivery') {
          this.formField.showPhotoOfParcelBeforeDelivery = true;
          this.formField.photoOfParcelBeforeDeliveryMandatory = true;
          this.formField.showPhotoOfParcelReceive = true;
          this.formField.photoOfParcelReceiveMandatory = true;
          this.formField.showCopyOfConsignmentNote = true;
          this.formField.copyOfConsignmentNoteMandatory = true;
          this.formField.showParcelValue = true;
          this.formField.parcelValueMandatory = true;
          this.formField.showTrackingNumber = true;
          this.formField.trackingNumberMandatory = true;
        }
      }
      this.formField.showServiceProviderSection = true;
      this.formField.showLocationDetailsSection = true;
    }

    //Broadcasting
    else if(mcmcRelatedComplaints == 'Broadcasting') {
      this.formField.showRemedy = true;
      if(typeOfService == 'Free to Air TV') {
        if(category == 'Content') {
          this.formField.showScreenshotOfDisputeContent = true;
          this.formField.showSubscriptionPlanName = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showSpecificChannel = true;
          this.formField.specificChannelMandatory = true;
          this.formField.showProgramName = true;
          this.formField.programNameMandatory = true;
          this.formField.showSpecificDate = true;
          this.formField.specificDateMandatory = true;
          this.formField.showSpecificTime = true;
          this.formField.specificTimeMandatory = true;
        }
      }
      else if(typeOfService == 'Pay TV') {
        if(category == 'Content') {
          this.formField.showScreenshotOfDisputeContent = true;
          this.formField.subscriptionPlanNameMandatory = true;
          this.formField.showSubscriptionPlanType = true;
          this.formField.subscriptionPlanTypeMandatory = true;
          this.formField.showSpecificChannel = true;
          this.formField.specificChannelMandatory = true;
          this.formField.showProgramName = true;
          this.formField.programNameMandatory = true;
          this.formField.showSpecificDate = true;
          this.formField.specificDateMandatory = true;
          this.formField.showSpecificTime = true;
          this.formField.specificTimeMandatory = true;
        }
      }
      else if(typeOfService == 'Radio') {
        if(category == 'Content') {
          this.formField.showSpecificChannel = true;
          this.formField.specificChannelMandatory = true;
          this.formField.showProgramName = true;
          this.formField.programNameMandatory = true;
          this.formField.showSpecificDate = true;
          this.formField.specificDateMandatory = true;
          this.formField.showSpecificTime = true;
          this.formField.specificTimeMandatory = true;
        }
      }
      this.formField.showServiceProviderSection = true;
      this.formField.showLocationDetailsSection = true;
    }

    //Online Content
    else if(mcmcRelatedComplaints == 'Online Content') {
      this.formField.showPlatform = true;
      this.formField.showDisclaimer = true;
      this.formField.showRemedy = true;
      if(typeOfService == 'E Commerce') {
        this.formField.showUrlContentInvolved = true;
        this.formField.showUserNameIdInvolved = true;
      }
      else if(typeOfService == 'Forum') {
        this.formField.showUrlContentInvolved = true;
        this.formField.showUserNameIdInvolved = true;
      }
      else if(typeOfService == 'Email') {
        this.formField.showEmailHeader = true;
        this.formField.showEmailAddress = true;
        this.formField.showContentOfEmail = true;
      }
      else if(typeOfService == 'Messaging App') {
        this.formField.showScreenshotOfContent = true;
        this.formField.showAdditionalInfoMobileNumber = true;
        this.formField.showUserNameIdForMessagingApp = true;
        this.formField.showSpecificUrlOfTheGroupAccount = true;
      }
      else if(typeOfService == 'Social Media') {
        this.formField.showScreenshotOfContent = true;
        this.formField.showUrlContentInvolved = true;
        this.formField.showUserNameIdInvolved = true;
      }
      else if(typeOfService == 'Website') {
        this.formField.showUrlContentInvolved = true;
      }
      else if(typeOfService == 'Phone Line') {
        this.formField.showScreenshotOfSmsContentRelated = true;
        this.formField.screenshotOfSmsContentRelatedMandatory = true;
        this.formField.showPoliceReport = true;
        this.formField.showVoiceRecordingContentRelated = true;
        this.formField.showScreenshotOfCallHistory = true;
      }
    }

    //MCMC Provision
    else if(mcmcRelatedComplaints == 'MCMC Provision') {
      this.formField.showSubcategory = true;
      if(typeOfService == 'Telecommunication Matters') {
        if(category == 'MCMC Provision') {
          if(subcategory == 'Non Standard Equipment') {
            this.formField.showScreenshotPictureOfDevice = true;
            this.formField.showDeviceBrand = true;
            this.formField.showDeviceModel = true;
            this.formField.showDeviceSpecification = true;
            this.formField.showDeviceSerialNumber = true;
            this.formField.showSpecificLinkUrlAddressOfDevice = true;
          }
          else if(subcategory == 'Public Phone - USP area') {
            this.formField.showPhotoOfLocation = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'Pusat Ekonomi Digital Keluarga Malaysia (PEDi)') {
            this.formField.showPediName = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'Radiation') {
            this.formField.showPhotoOfLocation = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'Site Offer (Tower/Structure)') {
            this.formField.showPhotoOfLocation = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'Site Rental') {
            this.formField.showPhotoOfLocation = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'Spectrum Interference') {
            this.formField.showFrequency = true;
            this.formField.showRfiComplaintForm = true;
            this.formField.showRfiScanningRequestForm = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'Tower Objection') {
            this.formField.showPhotoOfLocation = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'Tower Service Failure') {
            this.formField.showPhotoOfLocation = true;
            this.formField.showLocationDetailsSection = true;
          }
          else if(subcategory == 'TV Parabola') {
            this.formField.showPhotoOfLocation = true;
            this.formField.showLocationDetailsSection = true;
          }
        }
      }
    }

    if(this.formField.showServiceProviderSection || this.formField.showSubscriptionPlanName || this.formField.showSubscriptionPlanType || this.formField.showAccountDetails
      || this.formField.showSpecificInfoDispute || this.formField.showSpecificDateInfoDispute || this.formField.showSpecificTimeInfoDispute || this.formField.showImeiNumber
      || this.formField.showPhoneNumber || this.formField.showEnvironment || this.formField.showSignalBar || this.formField.showNetworkIndicator || this.formField.showDisruptionDate
      || this.formField.showDisruptionTime || this.formField.showCallerNumber || this.formField.showReceiverNumber || this.formField.showPhoneModel || this.formField.showNetworkAvailability
      || this.formField.showImprovementDate || this.formField.showRemark || this.formField.showRouterModel || this.formField.showModemModel || this.formField.showLatency
      || this.formField.showPacketLoss || this.formField.showTvSettopBoxModel || this.formField.showCompanyName || this.formField.showCompanyAddress || this.formField.showTrackingNumber
      || this.formField.showSpecificChannel || this.formField.showProgramName || this.formField.showSpecificDate || this.formField.showSpecificTime || this.formField.showUrlContentInvolved
      || this.formField.showUserNameIdInvolved || this.formField.showEmailHeader || this.formField.showEmailAddress || this.formField.showContentOfEmail || this.formField.showAdditionalInfoMobileNumber
      || this.formField.showUserNameIdForMessagingApp || this.formField.showSpecificUrlOfTheGroupAccount || this.formField.showDeviceBrand || this.formField.showDeviceModel
      || this.formField.showDeviceSpecification || this.formField.showDeviceSerialNumber || this.formField.showSpecificLinkUrlAddressOfDevice || this.formField.showPediName) {
      this.formField.showAdditionalAndServiceProviderInfoSection = true;
    }

    return this.formField;
  }
}
