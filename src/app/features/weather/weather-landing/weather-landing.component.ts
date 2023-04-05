import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  Condition,
  Current,
  CurrentLocation,
  Day,
  Forecast,
  Forecastday,
  Location,
  Weather,
  Weathercode,
} from 'src/app/shared/interfaces/weather';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-weather-landing',
  templateUrl: './weather-landing.component.html',
  styleUrls: ['./weather-landing.component.scss'],
})
export class WeatherLandingComponent implements OnInit {

  public weatherData: Weather = {
    location: {} as Location,
    current: {condition : {} as Condition} as Current,
    forecast: { forecastday : [] as Forecastday[]} as Forecast,
  } as Weather;

  public weatherCode: Weathercode[] = [] as Weathercode[];
  public weather : Weathercode = {} as Weathercode;
  public forecast : {day: string, forecastDay: Day, image: string}[] = [] as {day: string, forecastDay: Day, image: string}[]; 

  constructor(private http: HttpClient,private weatherService: WeatherService) {}

  async ngOnInit(): Promise<void> {
    this.http
    .get('/assets/json/weather.json')
    .subscribe((data) => {
      this.weatherCode = data as Weathercode[];
      console.log(this.weatherCode);
    });
    await this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.weatherService.getCurrentLocation().subscribe({
      next:(locationData) => {
        const location = locationData as CurrentLocation;
        const currentLocation = location.lat + ',' + location.lon;
        this.weatherService.getWeatherForecast(currentLocation).subscribe({
          next: (result) => {
            this.weatherData = result as Weather;
            console.log(this.weatherData);
            const weatherArray  = this.weatherCode.filter( (weather : Weathercode) => {
              return (weather.code === this.weatherData.current.condition.code)
            });
            this.weather = weatherArray[0];
            console.log(this.weather);
    
            let days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' , 'Sun'];
            for(let forecastday  of this.weatherData.forecast.forecastday){
              const d = new Date(forecastday.date);
              const day_no = d.getDay();
              console.log("Day No : "+ day_no);
              const day = days[day_no];
              const conditionArray = this.weatherCode.filter( (weather : Weathercode) => {
                return (weather.code === forecastday.day.condition.code);
              });
              this.forecast.push({day: day, forecastDay: forecastday.day , image : conditionArray[0].image_day});
    
            }
          },error: (error) => {
            console.log(error);
          }
        });

      },error: (error) => {
        console.log(error);
      }
    })
    
  }
}
