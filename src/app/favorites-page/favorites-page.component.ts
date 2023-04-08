import { Component, OnInit } from '@angular/core';
import { FavoritesLoc } from '../weather';
import { FavoratesService } from '../favorates.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  nodata: boolean = false;
  favorites: FavoritesLoc[] = []

  constructor(
    private favService: FavoratesService,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.favService.getFavorites().subscribe(favs => this.favorites = favs);
    console.log(this.favorites.length);
    if(this.favorites.length>0) this.nodata=false;
    else this.nodata=true;
  }

  deleteFavorite(id: any): void {
    if(id == this.favorites.length-1){
      this.weatherService.unlikedLocation();
    }
    this.favService.deleteFavorite(id);

    if(this.favorites.length>0) this.nodata=false;
    else this.nodata=true;
  }


}
