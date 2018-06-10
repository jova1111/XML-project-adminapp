import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Category } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly serverURL: string = 'http://127.0.0.1:9000';

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get(this.serverURL + '/getCategories');
  }

  public updateCategory(category : Category) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/updateCategory', category, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
   });  
  }

  public deleteCategory(category : Category) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/deleteCategory', category, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
   });  
  }

}
