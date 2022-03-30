import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { StoredWeatherComponent } from './home/components/storedweather';
import { WeatherComponent } from './home/components/weather';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ImageFormatPipe } from './pipes/image.pipe';

const OPTIONS = {
  appearance: 'outline',
  floatLabel: 'auto',
  hideRequiredMarker: false,
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    WeatherComponent,
    StoredWeatherComponent,
    ImageFormatPipe,
    DateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],

  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { ...OPTIONS },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
