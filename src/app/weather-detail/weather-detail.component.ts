import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather, Weather } from '../weather';
import { google } from 'google-maps';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})

export class WeatherDetailComponent implements OnInit {
  c_weather: CurrentWeather = {};
  weather: Weather = {};

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    console.log("wdetail-oninit");
    this.c_weather = this.weatherService.weather_c;
    this.weather = this.weatherService.weather_15[0];
    this.initMap();    
  }

  initMap(): void {
    // The location of Uluru
    var c_lat:number = Number(this.c_weather.lat);
    var c_lng:number = Number(this.c_weather.lng);
    const c_loc = { lat: c_lat, lng: c_lng };
    // The map, centered at Uluru
    let mapdiv:any = document.getElementById('map'); 
    mapdiv.style.color="red";

    const map = new google.maps.Map(mapdiv,
    {
      zoom: 16,
      center: c_loc,
    });
  
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: c_loc,
      map: map,
    });
  }
  

}
