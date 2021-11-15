import { Component, OnInit } from '@angular/core';
//import { WEATHERS } from '../mock-weather';
import { Weather, CurrentWeather } from '../weather';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  //weathers = WEATHERS;
  //weathers: Weather[] = [];

  public weather_15: Weather[] = [];
  public weather_c: CurrentWeather = {};
  
  constructor(private weatherService: WeatherService) {  
  }

  ngOnInit(): void {
    console.log("wlist-oninit");
    this.weather_15 = this.weatherService.weather_15;
    this.weather_c = this.weatherService.weather_c;
  }  

}
