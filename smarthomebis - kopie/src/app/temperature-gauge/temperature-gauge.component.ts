import {Component, Input} from '@angular/core';
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-temperature-gauge',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-gauge.component.html',
  styleUrl: './temperature-gauge.component.css'
})
export class TemperatureGaugeComponent {
  titel: string = "titel";
  @Input() temp: string= "15";
}
