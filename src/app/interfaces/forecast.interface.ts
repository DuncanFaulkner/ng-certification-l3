export interface ForecastInfo {
  city: {
    coord: {
      lat: string;
      lon: string;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    timezone: number;
    zipcode: string;
  };
  cnt: number;
  cod: string;
  list: {
    clouds: number;
    deg: number;
    dt: number;
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    humidity: number;
    pop: number;
    pressure: number;
    rain: number;
    speed: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    };
  };
}
