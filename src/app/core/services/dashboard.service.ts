import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class DashboardService {

    constructor(public http: HttpClient) { }

    getPublicDashboard() {
      return this.http.get(API_URL + '/dashboard/public');
    }

}

