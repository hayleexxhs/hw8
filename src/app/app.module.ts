import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsErrorComponent } from './results-error/results-error.component';
import { FavoratesDetailComponent } from './favorates-detail/favorates-detail.component';
import { ChartComponent } from './chart/chart.component';

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ResultsPageComponent,
    WeatherListComponent,
    FavoritesPageComponent,
    WeatherDetailComponent,
    ResultsErrorComponent,
    FavoratesDetailComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
