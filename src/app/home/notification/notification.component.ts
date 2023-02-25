// @ts-nocheck

import {Component, OnInit} from '@angular/core';
import {CasenotificationService} from "../../core/services/casenotification.service";
import Swal from "sweetalert2";
import {EventService} from "../../core/services/event.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications;

  constructor(private casenotificationService: CasenotificationService,
              private eventService: EventService) {}

  ngOnInit() {
    this.casenotificationService.getNotificationForPublic().subscribe((response) => {
        this.notifications = response.result;
        console.log(this.notifications);
      }
    );
  }

  read(notification) {
    notification.isRead = true;
    this.casenotificationService.readNotificationByPublic(notification.id).subscribe((response) => {
        if(response.isSuccess) {
          this.eventService.broadcast('refreshUnreadCount');
        }
        else {
          Swal.fire({
            icon: 'warning',
            title: 'Oops!',
            text: response.message
          });
        }
      }
    );
  }

  readAll() {
    this.casenotificationService.readAllNotificationsByPublic().subscribe((response) => {
        if(response.isSuccess) {
          this.eventService.broadcast('refreshUnreadCount');
          this.ngOnInit();
        }
        else {
          Swal.fire({
            icon: 'warning',
            title: 'Oops!',
            text: response.message
          });
        }
      }
    );
  }

}
