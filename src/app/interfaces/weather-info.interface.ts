export interface WeatherInfo {
  coord: { lon: string; lat: string };
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: string;
    feels_like: string;
    temp_min: string;
    temp_max: string;
    pressure: string;
    humidity: string;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  zipcode: string;
  image: string;
}
