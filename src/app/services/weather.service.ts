import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private readonly appID = environment.appId;
  constructor(public http: HttpClient) { }
  // filtros imperial y metric
  getWeather(city:string, metric:'metric' | 'imperial'='metric'):Observable<any>{
    return this.http.get(
      `${this.baseURL}$(city)&units=${metric}&APPID=${this.appID}`
    ).pipe((first()))
  }

  getForecast(city:string, metric:'metric' | 'imperial'='metric'):Observable<any>{
    return this.http.get(
      `${this.forecastURL}${city}&units=${metric}&appID=${this.appID}`
    ).pipe(first(), map((weather) => weather['list']));
  }
}
