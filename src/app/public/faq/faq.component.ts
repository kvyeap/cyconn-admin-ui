import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from '../../core/services/announcement.service';
import {BlogContentComponent} from '../../shared/ui/blog-content/blog-content.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{

  faqList: any[];
  selectedItem: any;
  env = environment;

  constructor(private announcementService: AnnouncementService) {
  }

  viewItem(uuid: string) {
    this.selectedItem = null;
    this.announcementService.getFaqAnnouncementByUuid(uuid).subscribe(data => {
      this.selectedItem = data.result;
    })
  }

  ngOnInit(): void {
    this.announcementService.getFaqAnnouncement().subscribe(data => {
      if (data.isSuccess) {
        this.faqList = data.result;
        this.selectedItem = this.faqList[0];
      } else {
        console.error(data);
      }
    });
  }


}
