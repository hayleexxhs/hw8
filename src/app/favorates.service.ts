import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FavoritesLoc } from './weather';

@Injectable({
  providedIn: 'root'
})
export class FavoratesService {

  public favorites: FavoritesLoc[] = [];

  constructor() { }

  getFavorites(): Observable<FavoritesLoc[]> {
    const favs = of(this.favorites);
    return favs;
  }
  
  getFavoriteByID(id: number): FavoritesLoc {
    return this.favorites[id];
  }

  addFavorite(fav: FavoritesLoc): void {
    this.favorites.push(fav);
  }

  deleteFavorite(i: number): void {
    this.favorites.splice(i,1);
  }

  deleteLastFav(): void {
    this.favorites.pop();
  }
}
