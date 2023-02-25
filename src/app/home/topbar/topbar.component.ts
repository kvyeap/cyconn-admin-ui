// @ts-nocheck

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {AuthenticationService} from "../../core/services/auth.service";
import {CasenotificationService} from "../../core/services/casenotification.service";
import {EventService} from "../../core/services/event.service";

@Component({
  selector: 'app-home-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{

  user: any;
  unreadCountNotification: any;

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private casenotificationService: CasenotificationService,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUserInfo();
    this.getUnreadCountNotification();

    this.eventService.subscribe('refreshUnreadCount', () => {
      this.getUnreadCountNotification();
    });
  }

  logout() {
    this.authenticationService.logout();
  }

  getUnreadCountNotification() {
    this.casenotificationService.getUnreadCountNotificationForPublic().subscribe((response) => {
        this.unreadCountNotification = response.result;
      }
    );
  }

}
