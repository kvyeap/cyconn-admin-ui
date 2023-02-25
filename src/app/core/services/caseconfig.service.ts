import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CaseconfigService {

  constructor(public http: HttpClient) { }

  getCaseSectors() {
    return this.http.get(API_URL+ '/public/case/sector');
  }

  getTypesBySector(sectorCode) {
    return this.http.get(API_URL+ '/public/case/sector/' + sectorCode + '/types');
  }

  getCategoryByType(typeCode) {
    return this.http.get(API_URL+ '/public/case/type/' + typeCode + '/categories');
  }

  getSubCategoriesByCategory(categoryCode) {
    return this.http.get(API_URL+ '/public/case/category/' + categoryCode + '/sub-categories');
  }

  getCaseRemediesBySector(sectorCode) {
    return this.http.get(API_URL+ '/public/case/sector/' + sectorCode + '/remedies');
  }

  getCaseServiceProviderActions() {
    return this.http.get(API_URL+ '/public/case/sp-actions');
  }

}
