import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {DomSanitizer} from "@angular/platform-browser";
import {ImageviewerModalComponent} from "../../home/imageviewer-modal/imageviewer-modal.component";
import {CaseattachmentService} from "./caseattachment.service";

@Injectable({
  providedIn: 'root'
})
export class AttachmentloaderService {

  constructor(private modalService: NgbModal,
              private caseattachmentService: CaseattachmentService,
              private sanitizer: DomSanitizer) { }

  modalRef: NgbModalRef;

  load(attachment, type) {
    if(type == 'caseAttachment') {
      this.caseattachmentService.streamCaseAttachment(attachment.caseAttachmentUUID).subscribe(
        (response) => {
          if(attachment.mime && attachment.mime.indexOf('image') > -1){
            this.modalRef = this.modalService.open(ImageviewerModalComponent, { centered: true, size: 'lg' });
            const modalRef = this.modalRef;
            modalRef.componentInstance.src = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(response));
            if(attachment.fileName){
              modalRef.componentInstance.name = attachment.fileName;
            }
          }
          else{
            this.download(attachment, response);
          }
        }
      );
    }
    else if(type == 'caseComment'){
      this.caseattachmentService.streamCaseCommentAttachment(attachment.caseAttachmentUUID).subscribe(
        (response) => {
          if(attachment.mime && attachment.mime.indexOf('image') > -1){
            this.modalRef = this.modalService.open(ImageviewerModalComponent, { centered: true, size: 'lg' });
            const modalRef = this.modalRef;
            modalRef.componentInstance.src = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(response));
            if(attachment.fileName){
              modalRef.componentInstance.name = attachment.fileName;
            }
          }
          else{
            this.download(attachment, response);
          }
        }
      );
    }
  }

  download(attachment, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;

    if(attachment.fileName){
      a.download = attachment.fileName;
    }

    a.click();
    URL.revokeObjectURL(url);
  }
}
