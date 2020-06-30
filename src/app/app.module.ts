import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';

import { AngularFireLite } from 'angularfire-lite';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCardComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireLite.forRoot(environment.config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
