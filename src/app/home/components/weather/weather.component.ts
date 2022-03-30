import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherInfo } from 'src/app/interfaces/weather-info.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  @Input() weather: WeatherInfo;
}
