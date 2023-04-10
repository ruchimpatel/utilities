import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Path } from '../enums/path';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentLocation(){
    const url = environment.apiUrl + Path.ipLookUp;
    const httpOptions = {
      params: new HttpParams()
        .set('key', environment.apiKey)
        .set('q', 'auto:ip')
    };
    return this.httpClient.get(url, httpOptions);
  }

  getWeatherForecast(location: string) {
    const url = environment.apiUrl + Path.forecast;
    const httpOptions = {
      params: new HttpParams()
        .set('key', environment.apiKey)
        .set('q', location)
        .set('days', 3)
        .set('aqi', 'no')
        .set('alerts', 'yes')
    };

    return this.httpClient.get(url, httpOptions);
  }
}
