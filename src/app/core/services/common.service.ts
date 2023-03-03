import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) {
  }

  getCityStateByPostcode(postcode: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/common/city-state/' + postcode);
  }

  getAddressType(): Observable<any> {
    return this.http.get(environment.apiUrl + '/common/address-type');
  }
}
