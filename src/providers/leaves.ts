import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RoomsProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Leaves {
  constructor(public http: Http) {
    console.log('[LOG]: LeavesProvider Provider starting...');
  }

  //Create a new leave
  create(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post("http://localhost:8080/api/leave/create", JSON.stringify(data), { headers: headers })
        .map(res => res.json()) //return the data result from database to app.
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}