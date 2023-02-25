import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CasecommentService {

  constructor(public http: HttpClient) { }

  createCommentByPublic(data: any) {
    return this.http.post(API_URL + '/case-comment/public-create', data);
  }
}
