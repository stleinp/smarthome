import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NotificationComponent} from "../notification/notification.component";
import {RouterLink} from "@angular/router";
import {NotificationService} from "../notification.service";
import {Notif} from "../notif";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    NgForOf,
    NotificationComponent,
    RouterLink
  ],
  providers: [NotificationService],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit{
  aantalZichtbaar: number = 5;

  zichtbaar: Notif[] = [];
  notifications: Notif[] = [];

  constructor(private notificationService: NotificationService){}

  ngOnInit() {
    this.notificationService.haalAlleNotificaties()
      .subscribe(notifications =>{
        this.notifications = notifications;
        this.vermeerderZichtbaar()
      })
  }

  toonMeer(){
    this.aantalZichtbaar = Math.min(this.aantalZichtbaar+5, this.notifications.length);
    this.vermeerderZichtbaar();
    if(this.aantalZichtbaar === this.notifications.length){
      let domElt = document.getElementById("btn");
      // @ts-ignore
      domElt.style.display = "none";
    }
  }

  vermeerderZichtbaar(){
    this.zichtbaar = this.notifications.slice(0, this.aantalZichtbaar)
  }

}
