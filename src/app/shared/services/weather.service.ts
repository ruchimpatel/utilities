import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentLocation(){
    const url = 'http://api.weatherapi.com/v1/ip.json';
    const httpOptions = {
      params: new HttpParams()
        .set('key', 'baf1f1debe7f4422b9a191014230503')
        .set('q', 'auto:ip')
    };
    return this.httpClient.get(url, httpOptions);
  }

  getWeatherForecast(location: string) {
    const url = 'http://api.weatherapi.com/v1/forecast.json';
    const httpOptions = {
      params: new HttpParams()
        .set('key', 'baf1f1debe7f4422b9a191014230503')
        .set('q', location)
        .set('days', 3)
        .set('aqi', 'no')
        .set('alerts', 'no')
    };

    return this.httpClient.get(url, httpOptions);
  }
}
