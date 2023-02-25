import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CaseagreementService {

  constructor(public http: HttpClient) { }

  respondAgreement(data: any) {
    return this.http.post(API_URL + '/case-agreement/respond', data);
  }
}
