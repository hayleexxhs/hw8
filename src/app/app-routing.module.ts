import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPageComponent } from './results-page/results-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'results', component: ResultsPageComponent},
  {path: 'detail', component: WeatherDetailComponent},
  {path: 'favorites', component: FavoritesPageComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
