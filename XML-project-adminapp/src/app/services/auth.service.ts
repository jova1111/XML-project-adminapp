import { Injectable } from '@angular/core';
import { User, DeleteUser } from '../model/User';
import { Agent } from '../model/Agent';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  readonly serverURL: string = 'http://127.0.0.1:9000';

  constructor(private http: HttpClient) { }

  public login(user: User) {
    console.log(user);
    var data = {
      /*client_id: '2',
      client_secret: 'dRKS8omkeSCVp4VdaCZnd2DItMHxdlur96NGOine',
      grant_type: 'password',*/
      email: user.email,
      password: user.password
    };
    return new Promise((resolve, reject)=> {
      this.http.post(this.serverURL + '/loginAdmin', data).subscribe(
        (response: any) => {
          this.authenticate(response.token, response.expiresIn);
          
          resolve("Successfully logged in!");
        },
        (error: HttpErrorResponse) => {
          reject('Нисте унели исправне податке!');
        });
    });
  }

  public logout(user: User) {
    console.log(user);
    var data = {
      /*client_id: '2',
      client_secret: 'dRKS8omkeSCVp4VdaCZnd2DItMHxdlur96NGOine',
      grant_type: 'password',*/
      email: user.email,
      password: user.password
    };
    return new Promise((resolve, reject)=> {
      this.http.post(this.serverURL + '/logoutAdmin', data).subscribe(
        (response: any) => {
          this.authenticate(response.token, response.expiresIn);
          
          resolve("Successfully logged in!");
        },
        (error: HttpErrorResponse) => {
          reject('Нисте унели исправне податке!');
        });
    });
  }

  private authenticate(tokenStr: string, expDate: number) {
    let token = { value: tokenStr, expirationDate: Date.now() + expDate * 1000 }
    localStorage.setItem('token', JSON.stringify(token));
  }

  public isAuthenticated():boolean {
    let tokenJson = localStorage.getItem('token');
    console.log(tokenJson);
    if (!tokenJson) {
      return false;
    }
    let token = JSON.parse(tokenJson);
    console.log(Date.now());
    console.log(token.expirationDate);
    if(Date.now() > token.expirationDate) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }

  public register(user: User) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
                                     .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/user', user, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
    });
  }

  public registerAgent(agent: Agent) {
    console.log(agent);
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
                                     .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/registerAgent', agent, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
    });
  }

  public getUsers() {
    return this.http.get(this.serverURL + '/getUsers');
  }

  public getAgents() {
    return this.http.get(this.serverURL + '/getAgents');
  }

  public changeActivity(user: DeleteUser) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
                                     .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/changeActivity', user, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
    });
  }

  public deleteUser(user: DeleteUser) {
    const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
                                     .append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {this.http.post(this.serverURL + '/deleteUser', user, { headers: headers } ).subscribe(
      (success) => {
        resolve(success)
      }, 
      (error) => {
        reject(error)
      })
    });
  }

}
