import { Injectable } from '@angular/core';
import {Notif} from "./notif";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RestNotif} from "./RestNotif";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  haalAlleNotificaties(): Observable<Notif[]>{
    return this.http.get<RestNotif[]>("https://65f305ce105614e6549f984f.mockapi.io/notifications")
      .pipe(
        map(notifications => notifications.map(
          n => new Notif(Number(n.id), n.message, n.icon)
        ))
      )
  }


  haalEenNotificatie(id: number): Promise<Notif>{
    let notifications = [
      {
      "id": 0,
      "message": "Wake up alarm in master bedroom",
      "icon": "fa-clock"
      },
      {
        "id": 1,
        "message": "Back door locked",
        "icon": "fa-lock"
      },
      {
        "id": 2,
        "message": "Bathroom humidity reaches threshold",
        "icon": "fa-bath"
      },
      {
        "id": 3,
        "message": "Sam unlocked front door",
        "icon": "fa-key"
      },
      {
        "id": 4,
        "message": "Cloud backup completed",
        "icon": "fa-upload"
      },
      {
        "id": 5,
        "message": "Wake up alarm in master bedroom",
        "icon": "fa-clock"
      },
      {
        "id": 6,
        "message": "Back door locked",
        "icon": "fa-lock"
      },
      {
        "id": 7,
        "message": "Bathroom humidity reaches threshold",
        "icon": "fa-bath"
      },
      {
        "id": 8,
        "message": "Sam unlocked front door",
        "icon": "fa-key"
      },
      {
        "id": 9,
        "message": "Cloud backup completed",
        "icon": "fa-upload"
      },
      {
        "id": 10,
        "message": "Wake up alarm in master bedroom",
        "icon": "fa-clock"
      },
      {
        "id": 11,
        "message": "Back door locked",
        "icon": "fa-lock"
      },
      {
        "id": 12,
        "message": "Bathroom humidity reaches threshold",
        "icon": "fa-bath"
      },
      {
        "id": 13,
        "message": "Sam unlocked front door",
        "icon": "fa-key"
      },
      {
        "id": 14,
        "message": "Cloud backup completed",
        "icon": "fa-upload"
      },
      {
        "id": 15,
        "message": "Wake up alarm in master bedroom",
        "icon": "fa-clock"
      },
      {
        "id": 16,
        "message": "Back door locked",
        "icon": "fa-lock"
      },
      {
        "id": 17,
        "message": "Bathroom humidity reaches threshold",
        "icon": "fa-bath"
      },
      {
        "id": 18,
        "message": "Sam unlocked front door",
        "icon": "fa-key"
      },
      {
        "id": 19,
        "message": "Cloud backup completed",
        "icon": "fa-upload"
      }
    ]
    return Promise.resolve(notifications[id]);
  }
}
