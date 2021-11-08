import { Component, OnInit } from '@angular/core';
import { WEATHERS } from '../mock-weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weathers = WEATHERS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
