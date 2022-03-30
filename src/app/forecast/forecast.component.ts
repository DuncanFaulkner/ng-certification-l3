import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  forecast$ = this.forecastService.forecast$;
  zipcode: string = '';

  constructor(
    private forecastService: ForecastService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.zipcode = this.activatedRoute.snapshot.params['id'];
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.forecastService.selectedForecastChanged(this.zipcode);
      }
    });
  }

  back(): void {
    this.router.navigate(['/home']);
  }
}
