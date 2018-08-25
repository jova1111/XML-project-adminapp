import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Comment } from '../model/comment'

@Injectable({
  providedIn: 'root'
})
export class ApprovedCommentService {

  readonly serverURL: string = 'http://127.0.0.1:9000';

  constructor(private http: HttpClient) { }

  public getDisaproveComments() {
    return this.http.get(this.serverURL + '/getDisapproveComments');
  }

  public updateComment(comment : Comment) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/approveComment', comment, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
   });  
  }
}
