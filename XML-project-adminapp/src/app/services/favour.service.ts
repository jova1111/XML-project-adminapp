import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Favour } from '../model/favour';


@Injectable({
  providedIn: 'root'
})
export class FavourService {

  readonly serverURL: string = 'http://127.0.0.1:9000';

  constructor(private http: HttpClient) { }

  public getFavours() {
    return this.http.get(this.serverURL + '/getFavours');
  }

  public updateCategory(category : Favour) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/updateFavour', category, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
   });  
  }

  public deleteCategory(category : Favour) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/deleteFavour', category, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
   });  
  }

}

