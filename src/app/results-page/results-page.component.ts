import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather, CurrentWeather } from '../weather';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  public location:any;
  liked: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {    
    this.location = this.weatherService.weather_c.location;
  }

  likedLocation(): void {
    this.liked = !this.liked;
  }

}
