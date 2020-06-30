import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  /* Intercept input property changes with a setter */
  /* Use an input property setter to intercept and act upon a value from the parent. */
  @Input() set city(city: string) {
    this.cityName = city;

    this.weather
      .getWeather(city)
      .pipe(first())
      .subscribe(
        (payload) => {
          this.state = payload.weather[0].main;
          this.temp = Math.ceil(payload.main.temp);
        },
        (err) => {
          this.errorMessage = err.error.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      );

    this.weather
      .getForecast(city)
      .pipe(first())
      .subscribe(
        (payload) => {
          this.maxTemp = Math.round(payload[0].main.temp);
          this.minTemp = Math.round(payload[0].main.temp);
          for (const res of payload) {
            if (
              new Date().toLocaleDateString('en-GB') ===
              new Date(res.dt_txt).toLocaleDateString('en-GB')
            ) {
              this.maxTemp =
                res.main.temp > this.maxTemp
                  ? Math.round(res.main.temp)
                  : this.maxTemp;
              this.minTemp =
                res.main.temp < this.minTemp
                  ? Math.round(res.main.temp)
                  : this.minTemp;
            }
          }
        },
        (err) => {
          this.errorMessage = err.error.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      );
  }

  @Input() addMode;
  @Output() cityStored = new EventEmitter();
  citiesWeather: Object;
  darkMode: boolean;
  sub1: Subscription;
  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  errorMessage: string;
  cityName;
  cityAdded = false;

  constructor(public weather: WeatherService, public router: Router) {}

  ngOnInit(): void {
    /* this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    }); */
  }
  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }
  openDetails() {
    if (!this.addMode) {
      this.router.navigateByUrl('/details/' + this.cityName);
    }
  }
  addCity() {
   /*  this.fb.addCity(this.cityName).subscribe(() => {
      this.cityName = null;
      this.maxTemp = null;
      this.minTemp = null;
      this.state = null;
      this.temp = null;
      this.cityAdded = true;
      this.cityStored.emit(null);
      setTimeout(() => (this.cityAdded = false), 2000);
    }); */
  }
}
