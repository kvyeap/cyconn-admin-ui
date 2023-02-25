import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(public http: HttpClient) { }

  getTelecommunicationOrganization() {
    return this.http.get(environment.apiUrl+ '/public/organization/telecommunication');
  }

  getPostalOrganization() {
    return this.http.get(environment.apiUrl+ '/public/organization/postal');
  }

  getBroadcastingOrganization() {
    return this.http.get(environment.apiUrl+ '/public/organization/broadcasting');
  }

  getServiceProvider(): Observable<any>{
    return this.http.get(environment.apiUrl+ '/public/organization/service-provider');
  }
}
