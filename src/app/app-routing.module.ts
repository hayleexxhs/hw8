import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPageComponent } from './results-page/results-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { ResultsErrorComponent } from './results-error/results-error.component';
import { RouterModule, Routes } from '@angular/router';
import { FavoratesDetailComponent } from './favorates-detail/favorates-detail.component';


const routes: Routes = [
  {path: 'results', component: ResultsPageComponent, data:{animation:'ResultsPage'}},
  {path: 'detail', component: WeatherDetailComponent, data:{animation:'DetailPage'}},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: 'error', component: ResultsErrorComponent},
  {path: 'favoritedetail/:id', component: FavoratesDetailComponent}
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
