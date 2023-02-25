import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CasetimelineService {

  constructor(public http: HttpClient) { }

  getRecentActivitiesByPublic() {
    return this.http.get(API_URL+ '/case-timeline/public-recent-activities');
  }
}
