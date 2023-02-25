import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CaseSearchService {

    constructor(public http: HttpClient) { }

    doCaseSearch(data) {
      return this.http.post(environment.apiUrl + '/case-search/public', data);
    }

}

