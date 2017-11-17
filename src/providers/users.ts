import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RoomsProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Users {
  constructor(public http: Http) {
    console.log('[LOG]: UsersProvider Provider starting...');
  }

  //Register a new user
  userRegister(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post("http://localhost:8080/api/user/register", JSON.stringify(data), { headers: headers })
        .map(res => res.json()) //return the data result from database to app.
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  //user login
  userLogin(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post("http://localhost:8080/api/user/login", JSON.stringify(data), { headers: headers })
        .map(res => res.json()) //return the data result from database to app.
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  //user query
  userQuery(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post("http://localhost:8080/api/user/query", JSON.stringify(data), { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}