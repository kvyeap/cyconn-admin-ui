import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OsmService {

  constructor(public http: HttpClient) { }

  geocoding(address) {
    return this.http.get('https://nominatim.openstreetmap.org/search?addressdetails=1&format=json&limit=1&q=' + address);
  }
}
