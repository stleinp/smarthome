import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NotificationComponent} from "./notification/notification.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationComponent, NgForOf, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smarthomebis';


}
