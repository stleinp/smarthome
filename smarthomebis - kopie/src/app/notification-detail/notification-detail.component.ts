import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../notification.service";
import {Notif} from "../notif";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-notification-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  providers: [NotificationService],
  templateUrl: './notification-detail.component.html',
  styleUrl: './notification-detail.component.css'
})
export class NotificationDetailComponent implements OnInit{
  Id: number | undefined;
  notificatie: Notif | undefined;

  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.Id = Number(this.route.snapshot.paramMap.get('id'))
    this.notificationService.haalEenNotificatie(this.Id)
      .then(notification =>{
        this.notificatie = notification;
      })
  }


}
