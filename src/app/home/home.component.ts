import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherInfo } from '../interfaces/weather-info.interface';
import { StorageService } from '../services/storage.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  title = 'ng-certification-l3';
  weather$ = this.weatherService.weather$;
  storedZipcodes: WeatherInfo[];

  constructor(
    private weatherService: WeatherService,
    private sessionStorage: StorageService
  ) {}

  ngOnInit(): void {
    this.storedZipcodes =
      this.sessionStorage.getStorage<WeatherInfo[]>('zipcode');
  }

  addLocation(zipcode: string) {
    this.weatherService.selectedZipcodeChanged(zipcode);
  }
}
