import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Type } from '../model/type';


@Injectable({
  providedIn: 'root'
})
export class TypeService {

  readonly serverURL: string = 'http://127.0.0.1:9000';

  constructor(private http: HttpClient) { }

  public getTypes() {
    return this.http.get(this.serverURL + '/getLodgingTypes');
  }

  public updateCategory(category : Type) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/updateLodgingType', category, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
   });  
  }

  public deleteCategory(category : Type) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/deleteLodgingType', category, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
   });  
  }

}
