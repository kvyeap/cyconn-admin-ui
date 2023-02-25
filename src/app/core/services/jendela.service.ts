import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JendelaService {

  constructor(public http: HttpClient) { }

  getAddress(data) {
    return this.http.post('http://jendelabeta.naditeknologi.com.my/api/Map/GetFeedbackAddress', data);
  }
}
