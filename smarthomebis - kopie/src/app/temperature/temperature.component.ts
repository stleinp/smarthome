import { Component } from '@angular/core';
import {TemperatureGaugeComponent} from "../temperature-gauge/temperature-gauge.component";

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [
    TemperatureGaugeComponent
  ],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {

}
