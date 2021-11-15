import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';


function g(id: string){
  return document.getElementById(id);
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  progressing: boolean = false;
  finished: boolean = false;
  success: boolean = false;

  private form:any;
  private form_street: any;
  private form_city: any;
  private form_state: any;
  private url:string = 'http://localhost:8081/search/';

  autocheck: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.form = g("searchForm");
    this.form_street = g("street");
    this.form_city = g("city");
    this.form_state = g("state");
  }

  checkAutoDetect(): void {
    this.autocheck=!this.autocheck;
    if(this.autocheck){
      this.form_street.value = '';
      this.form_city.value = '';
      this.form_state.value = '';
      this.form_street.disabled = true;
      this.form_city.disabled = true;
      this.form_state.disabled = true;
    }
    else{
      this.form_street.disabled = false;
      this.form_city.disabled = false;
      this.form_state.disabled = false;
    }
    
  }

  async searchWeathers(): Promise<void> {
    if(this.autocheck){
      this.url += '?autodetect=true';
    }
    else{
      //?street=2361%20Scarff%20St&city=Los%20Angeles&state=CA
      this.url += '?street=' + this.form_street.value + '&city=' + this.form_city.value + '&state=' + this.form_state.value;
    }
    this.progressing = true;
    this.success = await this.weatherService.getWeatherData(this.url);
    console.log("Success:", this.success);
    if(this.success == true) this.router.navigate(['/results']);
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
    this.url = 'http://localhost:8081/search/';
    this.autocheck = false;
    this.progressing = false;
    this.finished = false;
    this.success = false;
    this.weatherService.clearData();    
  }

}
