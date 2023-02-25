import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {

  constructor(private http: HttpClient) { }

  getMCMCAnnouncement(): Observable<any> {
    return this.http.get(environment.apiUrl + '/public/announcement/mcmc');
  }

  getMCMCAnnouncementByUuid(uuid: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/public/announcement/mcmc/' + uuid);
  }

  getFaqAnnouncement(): Observable<any> {
    return this.http.get(environment.apiUrl + '/public/announcement/faq');
  }

  getFaqAnnouncementByUuid(uuid: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/public/announcement/faq/' + uuid);
  }
}
