import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather();
    this.weatherService.getOneDayWeather();
  }

  checkAutoDetect(): void {

  }

  searchWeathers(): void {

  }

  clearForm(): void {
    
  }

}
