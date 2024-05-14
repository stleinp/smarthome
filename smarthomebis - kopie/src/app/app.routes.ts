import { Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {TemperatureComponent} from "./temperature/temperature.component";
import {EnergyComponent} from "./energy/energy.component";
import {SecurityComponent} from "./security/security.component";
import {NotificationDetailComponent} from "./notification-detail/notification-detail.component";

export const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'temperature', component: TemperatureComponent},
  { path: 'energy', component: EnergyComponent},
  { path: 'security', component: SecurityComponent},
  { path: 'notification/:id', component: NotificationDetailComponent}
];
