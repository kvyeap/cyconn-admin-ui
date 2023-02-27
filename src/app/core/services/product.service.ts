import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  searchProduct(form: FormGroup): Observable<any> {
    return this.http.get(environment.apiUrl + '/product', {params: form.value});
  }

}
