import { Injectable } from '@angular/core';
import {ApiPath} from '../../constance/api-path';
import {ApiService} from '../_core/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

const apiUrl = 'http://localhost:5000/api';
const productPath = ApiPath.product;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }
  getProducts(): Observable<any>{
    const url = `${apiUrl}/${productPath.products}`;
    return this.apiService.get(url)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          return body;
        })
      );
  }
}
