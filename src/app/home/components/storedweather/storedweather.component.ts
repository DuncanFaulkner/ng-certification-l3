import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherInfo } from 'src/app/interfaces/weather-info.interface';

@Component({
  selector: 'app-stored-weather',
  templateUrl: './storedweather.component.html',
  styleUrls: ['./storedweather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoredWeatherComponent {
  @Input() storedWeather: WeatherInfo[];
}
