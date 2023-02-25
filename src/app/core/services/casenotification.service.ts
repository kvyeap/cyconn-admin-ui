import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CasenotificationService {

  constructor(public http: HttpClient) { }

  getNotificationForPublic() {
    return this.http.get(API_URL+ '/case-notification/public');
  }

  getUnreadCountNotificationForPublic() {
    return this.http.get(API_URL+ '/case-notification/unread-count/public');
  }

  readNotificationByPublic(id) {
    return this.http.get(API_URL+ '/case-notification/public/read/' + id);
  }

  readAllNotificationsByPublic() {
    return this.http.get(API_URL+ '/case-notification/public/read/all');
  }
}
