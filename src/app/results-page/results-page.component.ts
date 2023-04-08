import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FavoratesService } from '../favorates.service';
import { FavoritesLoc } from '../weather';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  public location: any;
  liked: any;

  constructor(
    private weatherService: WeatherService,
    private favService : FavoratesService
    ) {}

  ngOnInit(): void {    
    console.log("rstpage-oninit");
    this.location = this.weatherService.weather_c.location;
    this.liked = this.weatherService.weather_c.isliked;
  }

  likedLocation(): void {
    this.liked = !this.liked;
    if(this.liked){
      this.weatherService.likedLocation();
      //add
      var newLoc: FavoritesLoc = {}
      newLoc.city = this.location.split(', ')[0];
      newLoc.state = this.location.split(', ')[1];
      newLoc.c_weather = this.weatherService.weather_c;
      newLoc.weather = this.weatherService.weather_15[0];
      this.favService.addFavorite(newLoc);
      console.log(this.favService.favorites);
    }
    else{
      this.weatherService.unlikedLocation();
      //delete
      this.favService.deleteLastFav();
      console.log(this.favService.favorites);
    }
  }

}
