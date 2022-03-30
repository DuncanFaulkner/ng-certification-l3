import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { ForecastInfo } from '../interfaces/forecast.interface';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private zipcode: string = '';
  private forecastSubject = new BehaviorSubject<string>(this.zipcode);
  forecastSelectedAction$ = this.forecastSubject.asObservable();

  forecast$ = this.forecastSelectedAction$.pipe(
    switchMap((zipcode) =>
      this.http.get<ForecastInfo>(
        `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode}&units=metric&cnt=5&appid=5a4b2d457ecbef9eb2a71e480b947604`
      )
    )
  );

  selectedForecastChanged(zipcode: string): void {
    this.zipcode = zipcode;
    this.forecastSubject.next(zipcode);
  }

  /** set up constructor and dependencies */
  constructor(private http: HttpClient) {}
}
