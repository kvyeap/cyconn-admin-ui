import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CaseattachmentService {

  constructor(public http: HttpClient) { }

  streamCaseAttachment(id) {
    return this.http.get(API_URL + '/case-attachment/stream-file/' + id, {responseType: 'blob'});
  }

  streamCaseCommentAttachment(id) {
    return this.http.get(API_URL + '/case-comment-attachment/stream-file/' + id, {responseType: 'blob'});
  }
}
