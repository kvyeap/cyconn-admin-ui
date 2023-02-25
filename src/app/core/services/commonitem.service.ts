import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CommonitemService {

  constructor(public http: HttpClient) { }

  // getCitiesByState(stateId) {
  //   return this.http.get(API_URL+ '/public/common/state/' + stateId + '/cities');
  // }

  // getStates() {
  //   return this.http.get(API_URL+ '/public/common/states');
  // }

  getPlatforms() {
    return this.http.get(API_URL+ '/public/common/platforms');
  }

  getSources() {
    return this.http.get(API_URL+'/public/common/sources');
  }

  getEnvironments() {
    return this.http.get(API_URL+ '/public/common/environments');
  }

  getLatencies() {
    return this.http.get(API_URL+ '/public/common/latencies');
  }

  getSubsPlanTypes() {
    return this.http.get(API_URL+ '/public/common/subs-plan-types');
  }

  getNetworkIndicators() {
    return this.http.get(API_URL+ '/public/common/network-indicators');
  }

  getSignalBars() {
    return this.http.get(API_URL+ '/public/common/signal-bar');
  }

  getSalutations() {
    return this.http.get(API_URL+ '/public/common/salutations');
  }

}
