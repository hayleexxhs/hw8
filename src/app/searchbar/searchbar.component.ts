import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

function g(id: string) {
  return document.getElementById(id);
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  animations: [slideInAnimation],
})
export class SearchbarComponent implements OnInit {
  progressing: boolean = false;
  finished: boolean = false;
  success: boolean = false;

  private form: any;
  private form_street: any;
  private form_city: any;
  private form_state: any;
  private street_formgroup: any;
  private city_formgroup: any;
  private results_tab: any;
  private favorites_tab: any;
  private searchBtn: any;

  private url: string = '/search/';
  // private url: string = 'http://localhost:8081/search/';
  // private url: string = 'https://csci571hw8-57108.wl.r.appspot.com/search/';

  autocheck: boolean = false;

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.form = g('searchForm');
    this.form_street = g('street');
    this.form_city = g('city');
    this.form_state = g('state');
    this.street_formgroup = g('streetFormGroup');
    this.city_formgroup = g('cityFormGroup');
    this.results_tab = g('resultsPageTab');
    this.favorites_tab = g('favoritesPageTab');
    this.searchBtn = g('searchBtn');
    this.searchBtn.disabled = true;
  }

  checkAutoDetect(): void {
    this.autocheck = !this.autocheck;
    if (this.autocheck) {
      this.form_street.value = '';
      this.form_city.value = '';
      this.form_state.value = '';
      this.form_street.disabled = true;
      this.form_city.disabled = true;
      this.form_state.disabled = true;
      this.searchBtn.disabled = false;
    } else {
      this.form_street.disabled = false;
      this.form_city.disabled = false;
      this.form_state.disabled = false;
      this.searchBtn.disabled = true;
    }
  }

  async searchWeathers(): Promise<void> {
    if (this.autocheck) {
      //this.url += '?autodetect=true';
      this.progressing = true;
      this.success = await this.weatherService.getWeatherByAutoDetect();
    } else {
      //?street=2361%20Scarff%20St&city=Los%20Angeles&state=CA
      this.url +=
        '?street=' +
        this.form_street.value +
        '&city=' +
        this.form_city.value +
        '&state=' +
        this.form_state.value;
      this.progressing = true;
      this.success = await this.weatherService.getWeatherData(this.url);
    }
    //this.progressing = true;
    //this.success = await this.weatherService.getWeatherData(this.url);
    console.log('Success:', this.success);
    if (this.success == true) this.router.navigate(['/results']);
    else this.router.navigate(['/error']);
    this.progressing = false;
    this.finished = true;
  }

  clearForm(): void {
    this.form.reset();
    this.form_street.disabled = false;
    this.form_city.disabled = false;
    this.form_state.disabled = false;
    this.router.navigate(['/']);
    this.url = '/search/';
    // this.url = 'http://localhost:8081/search/';
    // this.url = 'https://csci571hw8-57108.wl.r.appspot.com/search/';
    this.autocheck = false;
    this.progressing = false;
    this.finished = false;
    this.success = false;
    this.street_formgroup.classList.remove('was-validated');
    this.city_formgroup.classList.remove('was-validated');
    if (this.favorites_tab.classList.contains('active'))
      this.favorites_tab.classList.remove('active');
    if (!this.results_tab.classList.contains('active'))
      this.results_tab.classList.add('active');
    this.weatherService.clearData();
  }

  checkStreetInput(): void {
    this.street_formgroup.classList.add('was-validated');
    this.checkInput();
    //console.log(this.checkInput())
  }

  checkCityInput(): void {
    this.city_formgroup.classList.add('was-validated');
    //console.log(this.checkInput());
    this.checkInput();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }

  checkInput(): void {
    if (this.form_street.value != '' && this.form_city.value != '')
      this.searchBtn.disabled = false;
    else this.searchBtn.disabled = true;
  }
}
