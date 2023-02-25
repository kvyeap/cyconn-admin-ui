import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(public http: HttpClient) { }

  createCaseByPublic(data: any) {
    return this.http.post(API_URL + '/case/public-create', data);
  }

  getCaseInfoForPublic(id) {
    return this.http.get(API_URL + '/case/public/' + id);
  }

}
