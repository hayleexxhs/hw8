import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ResultsPageComponent,
    WeatherListComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
