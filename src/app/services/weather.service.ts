import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Subject, tap } from 'rxjs';
import { WeatherInfo } from '../interfaces/weather-info.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherSubject = new Subject<string>();
  weatherSelectedAction$ = this.weatherSubject.asObservable();
  zipcodes: WeatherInfo[] = [];

  weather$ = this.weatherSelectedAction$.pipe(
    mergeMap((zipcode) =>
      this.http
        .get<WeatherInfo>(
          `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=metric&appid=5a4b2d457ecbef9eb2a71e480b947604`
        )
        .pipe(
          tap((data) => {
            data.zipcode = zipcode;
            this.zipcodes.push(data);
            this.sessionStorage.setStorage<WeatherInfo[]>(
              'zipcode',
              this.zipcodes
            );
          })
        )
    )
  );

  selectedZipcodeChanged(zipcode: string): void {
    this.weatherSubject.next(zipcode);
  }

  /** set up constructor and dependencies */
  constructor(
    private http: HttpClient,
    private sessionStorage: StorageService
  ) {}
}
