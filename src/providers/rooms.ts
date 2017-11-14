import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RoomsProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Rooms {

  constructor(public http: Http) {
    console.log('[LOG]: RoomsProvider provider starting...');
  }

  //Search Rooms
  getRooms(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post("http://localhost:8080/api/rooms", JSON.stringify(data), { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  //Create a new room
  createRoom(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post("http://localhost:8080/api/room", JSON.stringify(data), { headers: headers })
        .subscribe((data) => {
          resolve(data);
        });
    });
  }

  //Reserve a new room.
  reserveRoom(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post("http://localhost:8080/api/rooms/reserve", JSON.stringify(data), { headers: headers })
        .subscribe((data) => {
          resolve(data);
        });
    });
  }


}