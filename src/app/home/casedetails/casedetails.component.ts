// @ts-nocheck

import {Component, OnInit, ViewChild} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {DropzoneComponent, DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import { ActivatedRoute } from '@angular/router';
import {CaseService} from "../../core/services/case.service";
import {environment} from "../../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {SpinnerVisibilityService} from "ng-http-loader";
import {AttachmentloaderService} from "../../core/services/attachmentloader.service";
import Swal from "sweetalert2";
import {FieldcheckService} from "../../core/services/fieldcheck.service";
import {CasecommentService} from "../../core/services/casecomment.service";
import {CaseagreementService} from "../../core/services/caseagreement.service";

@Component({
  selector: 'app-casedetails',
  templateUrl: './casedetails.component.html',
  styleUrls: ['./casedetails.component.scss']
})
export class CasedetailsComponent implements OnInit {

  constructor (private route: ActivatedRoute,
               private caseService: CaseService,
               private cookieService: CookieService,
               private spinner: SpinnerVisibilityService,
               private attachmentloaderService: AttachmentloaderService,
               private fieldCheckService: FieldcheckService,
               private casecommentService: CasecommentService,
               private caseagreementService: CaseagreementService) {}

  caseId = null;
  caseInfo = null;

  latestResolution = null;

  caseStatusTimeline = [];
  timelineCarousel: OwlOptions;

  @ViewChild('nav1') nav1;
  nav1ActiveId = 1;
  @ViewChild('nav2') nav2;
  nav2ActiveId = 1;

  //Case Comment Details
  caseComment = null;
  caseCommentAttachmentList = [];
  @ViewChild('caseCommentAttachmentDz') caseCommentAttachmentDz: DropzoneComponent;
  public caseCommentAttachmentDzConfig: DropzoneConfigInterface = {
    headers: {
      'X-Auth-Token': this.cookieService.get(environment.tokenName)
    },
    autoProcessQueue: true,
    uploadMultiple: true,
    maxFiles: 20,
    parallelUploads: 20,
    clickable: true,
    url: environment.apiUrl + '/case-comment-attachment/public-upload',
    method: 'POST',
    maxFilesize: 20,
    resizeWidth: 1000
  };

  //All Attachments
  allAttachments = [];

  //Form Submission Check
  caseCommentSubmitted = false;

  //Section Control
  showCommentSubmission = false;
  showAppealTab = false;

  ngOnInit() {
    this.caseId = this.route.snapshot.params.id;

    this.refreshCase();
  }

  refreshCase() {
    this.caseComment = null;
    this.caseCommentAttachmentList = [];

    this.caseCommentSubmitted = false;

    this.latestResolution = null;

    this.allAttachments = [];

    this.spinner.show();
    this.caseService.getCaseInfoForPublic(this.caseId).subscribe((response) => {
      this.spinner.hide();
      console.log(response);
      this.caseInfo = response.result;

      if(this.caseInfo.conversations && this.caseInfo.conversations.length > 0) {
        for(let conversation of this.caseInfo.conversations) {
          if(conversation.createdByIntUserGroup) {
            conversation.createdByIntUserGroupList = conversation.createdByIntUserGroup.split(";");
          }

          if(conversation.attachments && conversation.attachments.length > 0) {
            for(let attachment of conversation.attachments) {
              this.allAttachments.push(attachment);
            }
          }
        }
      }

      if(this.caseInfo.appealComments && this.caseInfo.appealComments.length > 0) {
        for(let appealComment of this.caseInfo.appealComments) {
          if(appealComment.createdByIntUserGroup) {
            appealComment.createdByIntUserGroupList = appealComment.createdByIntUserGroup.split(";");
          }
        }
      }

      if(this.caseInfo.resolutions && this.caseInfo.resolutions.length > 0) {
        for(let resolution of this.caseInfo.resolutions) {
          if(this.latestResolution == null) {
            if(resolution.isActive) {
              this.latestResolution = resolution;
            }
          }

          if(resolution.createdByIntUserGroup) {
            resolution.createdByIntUserGroupList = resolution.createdByIntUserGroup.split(";");
          }
        }
        console.log(this.latestResolution);
      }

      // if(this.caseInfo.attachments) {
      //   for(let attachment of this.caseInfo.attachments) {
      //     this.allAttachments.push(attachment);
      //   }
      // }

      this.constructCaseStatusTimeline();
      this.constructItemShowHide();
    });
  }

  constructCaseStatusTimeline() {
    this.caseStatusTimeline = [];
    let statusNewList = [];
    let statusInvestigationList = [];
    let statusAppealList = [];
    let statusResolvedList = [];
    let statusClosedList = [];
    let statusForceClosedList = [];
    for(let statusFlow of this.caseInfo.statusFlows) {
      if(statusFlow.crpStatus == 'New') {
        statusNewList.push(statusFlow);
      }
      else if(statusFlow.crpStatus == 'Investigation') {
        statusInvestigationList.push(statusFlow);
      }
      else if(statusFlow.crpStatus == 'Appeal') {
        statusAppealList.push(statusFlow);
      }
      else if(statusFlow.crpStatus == 'Resolved') {
        statusResolvedList.push(statusFlow);
      }
      else if(statusFlow.crpStatus == 'Closed') {
        statusClosedList.push(statusFlow);
      }
    }

    let statusNew = {
      name: 'New',
      completed: true,
      completedDateTime: statusNewList[0].createdDate
    };
    this.caseStatusTimeline.push(statusNew);

    if(statusInvestigationList.length == 0 && statusAppealList.length == 0) {
      if(statusClosedList.length == 0 && statusForceClosedList.length == 0) {
        let statusInvestigation = {
          name: 'Investigation',
          completed: false,
          completedDateTime: null
        };
        this.caseStatusTimeline.push(statusInvestigation);

        let statusResolved = {
          name: 'Resolved',
          completed: false,
          completedDateTime: null
        };
        this.caseStatusTimeline.push(statusResolved);
      }
      else {
        if(statusClosedList.length > 0) {
          let statusClosed = {
            name: 'Closed',
            completed: true,
            completedDateTime: statusClosedList[statusClosedList.length - 1].createdDate
          };
          this.caseStatusTimeline.push(statusClosed);
        }
      }
    }
    else {
      if(statusAppealList.length == 0) {
        let name = 'Investigation';
        if(statusResolvedList.length == 0 && statusClosedList.length == 0) {
          if(this.caseInfo.pendingOn) {
            name += ' (Pending ' + this.caseInfo.pendingOn + ')';
          }
        }
        let statusInvestigation = {
          name: name,
          completed: true,
          completedDateTime: statusInvestigationList[statusInvestigationList.length - 1].createdDate
        };
        this.caseStatusTimeline.push(statusInvestigation);

        if(statusClosedList.length > 0 && statusResolvedList.length == 0) {
          let statusClosed = {
            name: 'Closed',
            completed: true,
            completedDateTime: statusClosedList[statusClosedList.length - 1].createdDate
          };
          this.caseStatusTimeline.push(statusClosed);
        }
        else {
          let statusResolved = {
            name: 'Resolved',
            completed: false,
            completedDateTime: null
          };
          if(statusResolvedList.length > 0) {
            let latestStatusResolved = statusResolvedList[statusResolvedList.length - 1];
            if(new Date(latestStatusResolved.createdDate).getTime() > new Date(statusInvestigation.completedDateTime).getTime()) {
              statusResolved.completed = true;
              statusResolved.completedDateTime = latestStatusResolved.createdDate;
            }
          }
          this.caseStatusTimeline.push(statusResolved);

          if(statusClosedList.length > 0) {
            let statusClosed = {
              name: 'Closed',
              completed: true,
              completedDateTime: statusClosedList[statusClosedList.length - 1].createdDate
            };
            this.caseStatusTimeline.push(statusClosed);
          }
        }
      }
      else {
        let name = 'Appeal';
        if((statusClosedList.length == 0 && statusResolvedList.length == 0)
          || (statusResolvedList.length > 0
            && new Date(statusAppealList[statusAppealList.length - 1].createdDate).getTime()
            > new Date(statusResolvedList[statusResolvedList.length - 1].createdDate).getTime())) {
          if(this.caseInfo.appealIndicator) {
            name += ' (' + this.caseInfo.appealIndicator + ') ';
          }
          if(this.caseInfo.pendingOn) {
            name += ' (Pending ' + this.caseInfo.pendingOn + ')';
          }
        }
        let statusAppeal = {
          name: name,
          completed: true,
          completedDateTime: statusAppealList[statusAppealList.length - 1].createdDate
        };
        this.caseStatusTimeline.push(statusAppeal);

        let statusResolved = {
          name: 'Resolved',
          completed: false,
          completedDateTime: null
        };
        if(statusResolvedList.length > 0) {
          let latestStatusResolved = statusResolvedList[statusResolvedList.length - 1];
          if(new Date(latestStatusResolved.createdDate).getTime() > new Date(statusAppeal.completedDateTime).getTime()) {
            statusResolved.completed = true;
            statusResolved.completedDateTime = latestStatusResolved.createdDate;
          }
        }
        this.caseStatusTimeline.push(statusResolved);

        if(statusClosedList.length > 0) {
          let statusClosed = {
            name: 'Closed',
            completed: true,
            completedDateTime: statusClosedList[statusClosedList.length - 1].createdDate
          };
          this.caseStatusTimeline.push(statusClosed);
        }
      }
    }

    this.timelineCarousel = {
      items: this.caseStatusTimeline.length,
      loop: false,
      margin: 0,
      nav: false,
      dots: false,
    };
  }

  constructItemShowHide() {
    if(this.caseInfo.crpStatus != 'Resolved' && this.caseInfo.crpStatus != 'Closed') {
      this.showCommentSubmission = true;
    }

    if(this.caseInfo.appealComments && this.caseInfo.appealComments.length > 0) {
      this.showAppealTab = true;
    }
  }

  loadAttachment(item) {
    this.attachmentloaderService.load(item, item.type);
  }

  triggerCaseCommentAttachmentDz() {
    let el = this.caseCommentAttachmentDz.directiveRef.dropzone().element;
    setTimeout(() => { el.click();},100);
  }

  onCaseCommentAttachmentDzSending(event){
    const formData = event[2];
  }

  onCaseCommentAttachmentDzUploadSuccess(event) {
    let uploadedFiles = event[1].result;
    for(let uploadedFile of uploadedFiles){
      this.caseCommentAttachmentList.push(uploadedFile)
    }

    this.caseCommentAttachmentDz.directiveRef.reset();
    this.caseCommentAttachmentDz.directiveRef.dropzone();
  }

  onCaseCommentAttachmentDzUploadFailed(event) {
    this.caseCommentAttachmentDz.directiveRef.reset();
    this.caseCommentAttachmentDz.directiveRef.dropzone();
  }

  loadCaseCommentAttachment(item) {
    this.attachmentloaderService.load(item, 'caseComment');
  }

  removeCaseCommentAttachment(item) {
    for(let i=0; i<this.caseCommentAttachmentList.length; i++) {
      if (this.caseCommentAttachmentList[i].caseAttachmentUUID == item.caseAttachmentUUID) {
        this.caseCommentAttachmentList.splice(i, 1);
      }
    }
  }

  async doAddComment() {
    this.caseCommentSubmitted = true;

    await this.fieldCheckService.fieldCheck().then((proceed) => {
      if(proceed){
        this.addComment();
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

  addComment() {
    let caseCommentAttachments = [];
    for(let item of this.caseCommentAttachmentList) {
      caseCommentAttachments.push(item.caseAttachmentUUID);
    }

    let form = {
      caseUUID: this.caseId,
      message: this.caseComment,
      isVisibleServiceProvider: true,
      isVisibleForum: true,
      isVisiblePublic: true,
      attachmentUUID: caseCommentAttachments
    }
    console.log(form);

    this.spinner.show();
    this.casecommentService.createCommentByPublic(form).subscribe((response) => {
      this.spinner.hide();
      if(response.isSuccess) {
        Swal.fire({
          title: 'Success!',
          html: 'Comment has been successfully created.',
          icon: 'success',
        });
        this.refreshCase();
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Oops!',
          text: 'An error has occurred.'
        });
      }
    });
  }

  respondAgreement(agreement) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#0087E2',
      cancelButtonColor: '#0087E2',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.value) {
        let form = {
          caseResolutionId: this.latestResolution.caseResolutionId,
          isAgree: agreement
        }
        this.caseagreementService.respondAgreement(form).subscribe((response) => {
          this.spinner.hide();
          if(response.isSuccess) {
            Swal.fire({
              title: 'Success!',
              html: 'Your respond has been submitted.',
              icon: 'success',
            });
            this.refreshCase();
          }
          else {
            Swal.fire({
              icon: 'warning',
              title: 'Oops!',
              text: 'An error has occurred.'
            });
          }
        });
      }
    });
  }

}
