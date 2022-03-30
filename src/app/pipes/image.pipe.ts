import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'imageFormat',
})
export class ImageFormatPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: unknown, ...args: unknown[]): unknown {
    let image: SafeUrl;
    switch (value) {
      case '01d':
      case '01n':
        image = 'sun';
        break;
      case '13d':
      case '13n':
        image = 'snow';
        break;
      case '03d':
      case '03n':
      case '09d':
      case '09n':
      case '10d':
      case '10n':
      case '11d':
      case '11n':
        image = 'rain';
        break;
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
      case '50d':
      case '50n':
        image = 'clouds';
        break;
      default:
        return 'No image available';
    }
    return this.domSanitizer.bypassSecurityTrustUrl(
      `http://www.angulartraining.com/images/weather/${image}.png`
    );
  }
}
