import { Component, OnInit } from '@angular/core';
import { FavoratesService } from '../favorates.service';
import { FavoritesLoc } from '../weather';
import { google } from 'google-maps';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CurrentWeather, Weather } from '../weather';

@Component({
  selector: 'app-favorates-detail',
  templateUrl: './favorates-detail.component.html',
  styleUrls: ['./favorates-detail.component.css']
})
export class FavoratesDetailComponent implements OnInit {

  fav_loc: FavoritesLoc = {};
  c_weather: any
  weather: any

  constructor(
    private favService: FavoratesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFavoriteLoc();
    this.initMap();
  }

  getFavoriteLoc(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fav_loc = this.favService.getFavoriteByID(id);
    this.c_weather = this.fav_loc.c_weather;
    this.weather = this.fav_loc.weather;
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
