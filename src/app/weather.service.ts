import { Injectable } from '@angular/core';
import { Weather, CurrentWeather } from './weather';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public weather_data: any;

  public weather_15: Weather[] = [];
  public weather_c: CurrentWeather = {};

  constructor(private http: HttpClient) {}

  /** GET weather data from the server */
  async getWeatherData(url: string): Promise<any> {
    try {
      //let url="http://localhost:8081/search/?autodetect=true"
      this.weather_data = await this.http.get(url).toPromise();
      console.log(this.weather_data);
      this.getOneDayWeather();
      this.getCurrentWeather();
      return true;
    } catch (error) {
      console.log('Error!', error);
      return false;
    }

    /*
    this.http.get(url).subscribe((response) => {
      console.log(response);
      this.weather_data=response;
      this.getOneDayWeather();
      this.getCurrentWeather();
    })
    */
  }

  async getWeatherByAutoDetect(): Promise<any> {
    var url: string = 'https://ipinfo.io/?token=8154647fc6c0d6';
    /*
    this.http.get(url).subscribe((response) => {
      console.log(response);
    })
    */
    try {
      var ipData: any = await this.http.get(url).toPromise();
      console.log(ipData);
      var lat = ipData['loc'].split(',')[0].toString();
      var lng = ipData['loc'].split(',')[1].toString();
      var city = ipData['city'].replace(/ /g, '%20');
      var state = ipData['region'].replace(/ /g, '%20');
      // var newUrl =
      //   'https://weather-forecast-383108.wl.r.appspot.com/search/?autodetect=true&lat=' +
      //   lat +
      //   '&lng=' +
      //   lng +
      //   '&city=' +
      //   city +
      //   '&state=' +
      //   state;
      // var newUrl =
      //   'http://localhost:8081/search/?autodetect=true&lat=' +
      //   lat +
      //   '&lng=' +
      //   lng +
      //   '&city=' +
      //   city +
      //   '&state=' +
      //   state;
      var newUrl =
        '/search/?autodetect=true&lat=' +
        lat +
        '&lng=' +
        lng +
        '&city=' +
        city +
        '&state=' +
        state;
      console.log(newUrl);
      this.weather_data = await this.http.get(newUrl).toPromise();
      console.log(this.weather_data);
      this.getOneDayWeather();
      this.getCurrentWeather();
      return true;
    } catch (error) {
      console.log('Error!', error);
      return false;
    }
  }

  getOneDayWeather(): void {
    var data = [];
    //data = JSON.parse(this.weather_data);
    data = this.weather_data;
    for (var i = 0; i < 15; i++) {
      var w: Weather = {};
      w.date = data[1][i]['time'];
      w.datetime = data[1][i]['date'];
      w.status = data[1][i]['weatherCode'];
      w.statusimg = data[1][i]['icon'];
      w.temphigh = data[1][i]['temperatureMax'];
      w.templow = data[1][i]['temperatureMin'];
      w.windspeed = data[1][i]['windSpeed'];
      w.sunrise = data[1][i]['sunriseTime'];
      w.sunset = data[1][i]['sunsetTime'];
      this.weather_15.push(w);
    }
  }

  getCurrentWeather(): void {
    var data = [];
    //data = JSON.parse(this.weather_data);
    data = this.weather_data;
    this.weather_c.location = data[0]['location'];
    this.weather_c.lat = data[0]['lat'];
    this.weather_c.lng = data[0]['lng'];
    this.weather_c.status = data[0]['weatherCode'];
    this.weather_c.temp = data[0]['temperature'];
    this.weather_c.humidity = data[0]['humidity'];
    this.weather_c.windspeed = data[0]['windSpeed'];
    this.weather_c.visibility = data[0]['visibility'];
    this.weather_c.cloudcover = data[0]['cloudCover'];
    this.weather_c.isliked = false;
  }

  likedLocation(): void {
    this.weather_c.isliked = true;
  }

  unlikedLocation(): void {
    this.weather_c.isliked = false;
  }

  clearData(): void {
    this.weather_data = [];
    this.weather_15 = [];
    this.weather_c = {};
  }
}
