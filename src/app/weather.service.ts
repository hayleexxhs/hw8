import { Injectable } from '@angular/core';
import { Weather, CurrentWeather } from './weather';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //private weather_data:any=[{"location":"Los Angeles, California","lat":"34.0030","lng":"-118.2863","weatherCode":"Clear","temperature":62.04,"humidity":54,"windSpeed":0,"visibility":9.94,"cloudCover":0},[{"time":"Sunday, 14 Nov 2021","date":"2021-11-14","weatherCode":"Clear","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_day.svg","temperatureMax":90.73,"temperatureMin":58.14,"windSpeed":7.25,"sunriseTime":"06:23:20","sunsetTime":"16:48:20"},{"time":"Monday, 15 Nov 2021","date":"2021-11-15","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":82.02,"temperatureMin":51.46,"windSpeed":10.56,"sunriseTime":"06:26:40","sunsetTime":"16:48:20"},{"time":"Tuesday, 16 Nov 2021","date":"2021-11-16","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":75.04,"temperatureMin":52.83,"windSpeed":7.7,"sunriseTime":"06:26:40","sunsetTime":"16:48:20"},{"time":"Wednesday, 17 Nov 2021","date":"2021-11-17","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":72.81,"temperatureMin":59.4,"windSpeed":6.62,"sunriseTime":"06:28:20","sunsetTime":"16:48:20"},{"time":"Thursday, 18 Nov 2021","date":"2021-11-18","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":70.74,"temperatureMin":62.04,"windSpeed":7.45,"sunriseTime":"06:28:20","sunsetTime":"16:46:40"},{"time":"Friday, 19 Nov 2021","date":"2021-11-19","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":71.31,"temperatureMin":62.15,"windSpeed":6.49,"sunriseTime":"06:28:20","sunsetTime":"16:46:40"},{"time":"Saturday, 20 Nov 2021","date":"2021-11-20","weatherCode":"Clear","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_day.svg","temperatureMax":78.93,"temperatureMin":66.2,"windSpeed":7.27,"sunriseTime":"06:30:00","sunsetTime":"16:46:40"},{"time":"Sunday, 21 Nov 2021","date":"2021-11-21","weatherCode":"Clear","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_day.svg","temperatureMax":81.01,"temperatureMin":66.16,"windSpeed":6.04,"sunriseTime":"06:30:00","sunsetTime":"16:46:40"},{"time":"Monday, 22 Nov 2021","date":"2021-11-22","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":81.63,"temperatureMin":67.66,"windSpeed":8.05,"sunriseTime":"06:33:20","sunsetTime":"16:46:40"},{"time":"Tuesday, 23 Nov 2021","date":"2021-11-23","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":80.78,"temperatureMin":66.76,"windSpeed":6.26,"sunriseTime":"06:33:20","sunsetTime":"16:45:00"},{"time":"Wednesday, 24 Nov 2021","date":"2021-11-24","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":76.1,"temperatureMin":64.22,"windSpeed":5.64,"sunriseTime":"06:35:00","sunsetTime":"16:45:00"},{"time":"Thursday, 25 Nov 2021","date":"2021-11-25","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":69.17,"temperatureMin":61.18,"windSpeed":7.4,"sunriseTime":"06:35:00","sunsetTime":"16:45:00"},{"time":"Friday, 26 Nov 2021","date":"2021-11-26","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":60.37,"temperatureMin":57.15,"windSpeed":9.37,"sunriseTime":"06:36:40","sunsetTime":"16:45:00"},{"time":"Saturday, 27 Nov 2021","date":"2021-11-27","weatherCode":"Cloudy","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg","temperatureMax":59.13,"temperatureMin":48.27,"windSpeed":22.68,"sunriseTime":"06:36:40","sunsetTime":"16:45:00"},{"time":"Sunday, 28 Nov 2021","date":"2021-11-28","weatherCode":"Clear","icon_url":"https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_day.svg","temperatureMax":57.16,"temperatureMin":47.88,"windSpeed":10.04,"sunriseTime":"06:38:20","sunsetTime":"16:45:00"}],[{"time":"2021-11-14T00:00:00-08:00","temperature":62.94,"humidity":51,"pressure":30.07,"windSpeed":0,"windDirection":3.88},{"time":"2021-11-14T01:00:00-08:00","temperature":61.59,"humidity":42.08,"pressure":30.07,"windSpeed":3.83,"windDirection":56.85},{"time":"2021-11-14T02:00:00-08:00","temperature":59.65,"humidity":40.54,"pressure":30.06,"windSpeed":5.77,"windDirection":78.64},{"time":"2021-11-14T03:00:00-08:00","temperature":59.14,"humidity":36.84,"pressure":30.08,"windSpeed":6.15,"windDirection":51.68},{"time":"2021-11-14T04:00:00-08:00","temperature":58.95,"humidity":33.34,"pressure":30.07,"windSpeed":5.91,"windDirection":39.95},{"time":"2021-11-14T05:00:00-08:00","temperature":58.39,"humidity":34.09,"pressure":30.05,"windSpeed":5.61,"windDirection":40.15},{"time":"2021-11-14T06:00:00-08:00","temperature":58.84,"humidity":31.97,"pressure":30.08,"windSpeed":5.77,"windDirection":25.32},{"time":"2021-11-14T07:00:00-08:00","temperature":58.14,"humidity":32.23,"pressure":30.08,"windSpeed":5.68,"windDirection":31.89},{"time":"2021-11-14T08:00:00-08:00","temperature":65.43,"humidity":27.38,"pressure":30.09,"windSpeed":2.46,"windDirection":29.3},{"time":"2021-11-14T09:00:00-08:00","temperature":75.79,"humidity":18.93,"pressure":30.1,"windSpeed":1.81,"windDirection":19.85},{"time":"2021-11-14T10:00:00-08:00","temperature":81.77,"humidity":15.33,"pressure":30.09,"windSpeed":0.85,"windDirection":187.35},{"time":"2021-11-14T11:00:00-08:00","temperature":86.34,"humidity":13.34,"pressure":30.07,"windSpeed":2.13,"windDirection":240.2},{"time":"2021-11-14T12:00:00-08:00","temperature":89.78,"humidity":11.44,"pressure":30.05,"windSpeed":2.59,"windDirection":233.81},{"time":"2021-11-14T13:00:00-08:00","temperature":90.73,"humidity":12.69,"pressure":30.04,"windSpeed":5.32,"windDirection":238.83},{"time":"2021-11-14T14:00:00-08:00","temperature":87.1,"humidity":19.91,"pressure":30.03,"windSpeed":6.96,"windDirection":247.68},{"time":"2021-11-14T15:00:00-08:00","temperature":82.17,"humidity":23.39,"pressure":30.03,"windSpeed":7.09,"windDirection":255},{"time":"2021-11-14T16:00:00-08:00","temperature":76.03,"humidity":35.55,"pressure":30.03,"windSpeed":7.25,"windDirection":260.95},{"time":"2021-11-14T17:00:00-08:00","temperature":68.52,"humidity":52.99,"pressure":30.04,"windSpeed":5.97,"windDirection":267.67},{"time":"2021-11-14T18:00:00-08:00","temperature":65.3,"humidity":62.73,"pressure":30.06,"windSpeed":3.56,"windDirection":285.38},{"time":"2021-11-14T19:00:00-08:00","temperature":69.91,"humidity":41.89,"pressure":30.03,"windSpeed":3.56,"windDirection":225.35},{"time":"2021-11-14T20:00:00-08:00","temperature":66.97,"humidity":51.41,"pressure":30.05,"windSpeed":4.32,"windDirection":144.27},{"time":"2021-11-14T21:00:00-08:00","temperature":64.36,"humidity":57.55,"pressure":30.07,"windSpeed":5.59,"windDirection":118.48},{"time":"2021-11-14T22:00:00-08:00","temperature":62.8,"humidity":56.13,"pressure":30.08,"windSpeed":5.77,"windDirection":86.52},{"time":"2021-11-14T23:00:00-08:00","temperature":62.11,"humidity":51.96,"pressure":30.08,"windSpeed":6.35,"windDirection":69.38},{"time":"2021-11-15T00:00:00-08:00","temperature":60.73,"humidity":49.46,"pressure":30.08,"windSpeed":5.95,"windDirection":76.44},{"time":"2021-11-15T01:00:00-08:00","temperature":58.75,"humidity":51.52,"pressure":30.07,"windSpeed":5.53,"windDirection":81.35},{"time":"2021-11-15T02:00:00-08:00","temperature":60.08,"humidity":46.94,"pressure":30.06,"windSpeed":3.53,"windDirection":62.51},{"time":"2021-11-15T03:00:00-08:00","temperature":60.53,"humidity":43.19,"pressure":30.06,"windSpeed":3.44,"windDirection":12.11},{"time":"2021-11-15T04:00:00-08:00","temperature":63.63,"humidity":36.94,"pressure":30.05,"windSpeed":2.98,"windDirection":359.92},{"time":"2021-11-15T05:00:00-08:00","temperature":65.19,"humidity":33.03,"pressure":30.05,"windSpeed":2.37,"windDirection":30.9},{"time":"2021-11-15T06:00:00-08:00","temperature":62.35,"humidity":33.35,"pressure":30.06,"windSpeed":3.49,"windDirection":32.4},{"time":"2021-11-15T07:00:00-08:00","temperature":61.11,"humidity":32.1,"pressure":30.07,"windSpeed":3.78,"windDirection":9.94},{"time":"2021-11-15T08:00:00-08:00","temperature":65.35,"humidity":26.83,"pressure":30.09,"windSpeed":2.59,"windDirection":24.13},{"time":"2021-11-15T09:00:00-08:00","temperature":71.35,"humidity":21.1,"pressure":30.1,"windSpeed":1.12,"windDirection":91.6},{"time":"2021-11-15T10:00:00-08:00","temperature":76.41,"humidity":17.02,"pressure":30.09,"windSpeed":1.68,"windDirection":125.45},{"time":"2021-11-15T11:00:00-08:00","temperature":80.49,"humidity":14.9,"pressure":30.08,"windSpeed":3,"windDirection":207.13},{"time":"2021-11-15T12:00:00-08:00","temperature":82.02,"humidity":15.87,"pressure":30.05,"windSpeed":6.55,"windDirection":230.46},{"time":"2021-11-15T13:00:00-08:00","temperature":81.21,"humidity":19.22,"pressure":30.03,"windSpeed":9.55,"windDirection":239.91},{"time":"2021-11-15T14:00:00-08:00","temperature":78.33,"humidity":25.65,"pressure":30.01,"windSpeed":10.56,"windDirection":239.23},{"time":"2021-11-15T15:00:00-08:00","temperature":74.46,"humidity":34.55,"pressure":30.01,"windSpeed":9.98,"windDirection":245.65},{"time":"2021-11-15T16:00:00-08:00","temperature":71.29,"humidity":40.55,"pressure":30,"windSpeed":7.31,"windDirection":238.03},{"time":"2021-11-15T17:00:00-08:00","temperature":67.39,"humidity":51.55,"pressure":30,"windSpeed":4.41,"windDirection":230.14},{"time":"2021-11-15T18:00:00-08:00","temperature":65.21,"humidity":57.31,"pressure":30.02,"windSpeed":3.33,"windDirection":245.35},{"time":"2021-11-15T19:00:00-08:00","temperature":62.69,"humidity":64.65,"pressure":30.03,"windSpeed":3.98,"windDirection":217.54},{"time":"2021-11-15T20:00:00-08:00","temperature":60.76,"humidity":73.98,"pressure":30.03,"windSpeed":2.84,"windDirection":174.66},{"time":"2021-11-15T21:00:00-08:00","temperature":59.5,"humidity":79.04,"pressure":30.04,"windSpeed":3,"windDirection":105.09},{"time":"2021-11-15T22:00:00-08:00","temperature":58.46,"humidity":81.28,"pressure":30.05,"windSpeed":4.16,"windDirection":106.58},{"time":"2021-11-15T23:00:00-08:00","temperature":57.15,"humidity":83.61,"pressure":30.05,"windSpeed":4.34,"windDirection":98.88},{"time":"2021-11-16T00:00:00-08:00","temperature":55.74,"humidity":84.98,"pressure":30.06,"windSpeed":4.05,"windDirection":93.23},{"time":"2021-11-16T01:00:00-08:00","temperature":54.5,"humidity":86.13,"pressure":30.05,"windSpeed":4.3,"windDirection":69.31},{"time":"2021-11-16T02:00:00-08:00","temperature":52.93,"humidity":88.16,"pressure":30.04,"windSpeed":5.03,"windDirection":79.15},{"time":"2021-11-16T03:00:00-08:00","temperature":51.46,"humidity":92.21,"pressure":30.02,"windSpeed":4.45,"windDirection":69},{"time":"2021-11-16T04:00:00-08:00","temperature":51.84,"humidity":90.47,"pressure":30.02,"windSpeed":3.38,"windDirection":32.07},{"time":"2021-11-16T05:00:00-08:00","temperature":51.96,"humidity":88.41,"pressure":30.01,"windSpeed":3.31,"windDirection":36.37},{"time":"2021-11-16T06:00:00-08:00","temperature":52.05,"humidity":84.82,"pressure":30.01,"windSpeed":3.62,"windDirection":44.6},{"time":"2021-11-16T07:00:00-08:00","temperature":52.83,"humidity":76.61,"pressure":30.02,"windSpeed":3.44,"windDirection":68.26},{"time":"2021-11-16T08:00:00-08:00","temperature":55.54,"humidity":65.75,"pressure":30.02,"windSpeed":3.53,"windDirection":98.78},{"time":"2021-11-16T09:00:00-08:00","temperature":60.35,"humidity":54.16,"pressure":30.03,"windSpeed":1.7,"windDirection":94.92},{"time":"2021-11-16T10:00:00-08:00","temperature":65.46,"humidity":50.76,"pressure":30.03,"windSpeed":2.91,"windDirection":168.91},{"time":"2021-11-16T11:00:00-08:00","temperature":69.55,"humidity":47.67,"pressure":30,"windSpeed":3.89,"windDirection":155.37},{"time":"2021-11-16T12:00:00-08:00","temperature":73.22,"humidity":42.1,"pressure":29.97,"windSpeed":5.01,"windDirection":160.18},{"time":"2021-11-16T13:00:00-08:00","temperature":75.04,"humidity":39.51,"pressure":29.94,"windSpeed":5.5,"windDirection":183.12},{"time":"2021-11-16T14:00:00-08:00","temperature":73.67,"humidity":47.08,"pressure":29.92,"windSpeed":7.65,"windDirection":206.84},{"time":"2021-11-16T15:00:00-08:00","temperature":70.7,"humidity":56.3,"pressure":29.92,"windSpeed":7.7,"windDirection":217.24},{"time":"2021-11-16T16:00:00-08:00","temperature":67.05,"humidity":64.43,"pressure":29.91,"windSpeed":7.18,"windDirection":221.52},{"time":"2021-11-16T17:00:00-08:00","temperature":63.39,"humidity":73.7,"pressure":29.92,"windSpeed":5.21,"windDirection":223.84},{"time":"2021-11-16T18:00:00-08:00","temperature":61.52,"humidity":78.32,"pressure":29.93,"windSpeed":2.98,"windDirection":210.76},{"time":"2021-11-16T19:00:00-08:00","temperature":60.15,"humidity":83.01,"pressure":29.94,"windSpeed":2.91,"windDirection":137.6},{"time":"2021-11-16T20:00:00-08:00","temperature":58.78,"humidity":90.06,"pressure":29.96,"windSpeed":4.27,"windDirection":97.24},{"time":"2021-11-16T21:00:00-08:00","temperature":57.45,"humidity":97.51,"pressure":29.97,"windSpeed":4.85,"windDirection":86.22},{"time":"2021-11-16T22:00:00-08:00","temperature":56.82,"humidity":99.51,"pressure":29.97,"windSpeed":6.35,"windDirection":95.28},{"time":"2021-11-16T23:00:00-08:00","temperature":56.32,"humidity":99.55,"pressure":29.98,"windSpeed":5.95,"windDirection":103.57},{"time":"2021-11-17T00:00:00-08:00","temperature":56.71,"humidity":96.95,"pressure":29.98,"windSpeed":5.21,"windDirection":99.01},{"time":"2021-11-17T01:00:00-08:00","temperature":57.31,"humidity":94.57,"pressure":29.97,"windSpeed":5.1,"windDirection":79.34},{"time":"2021-11-17T02:00:00-08:00","temperature":57.61,"humidity":92.74,"pressure":29.97,"windSpeed":4.65,"windDirection":88.54},{"time":"2021-11-17T03:00:00-08:00","temperature":57.85,"humidity":91.14,"pressure":29.96,"windSpeed":4.68,"windDirection":85.02},{"time":"2021-11-17T04:00:00-08:00","temperature":58.32,"humidity":89.05,"pressure":29.96,"windSpeed":4.99,"windDirection":93.06},{"time":"2021-11-17T05:00:00-08:00","temperature":58.53,"humidity":87.95,"pressure":29.97,"windSpeed":3.74,"windDirection":99.29},{"time":"2021-11-17T06:00:00-08:00","temperature":58.91,"humidity":86.12,"pressure":29.98,"windSpeed":3.24,"windDirection":121.91},{"time":"2021-11-17T07:00:00-08:00","temperature":59.4,"humidity":83.8,"pressure":29.99,"windSpeed":2.48,"windDirection":120.37},{"time":"2021-11-17T08:00:00-08:00","temperature":61.23,"humidity":76.17,"pressure":30.01,"windSpeed":2.04,"windDirection":80.02},{"time":"2021-11-17T09:00:00-08:00","temperature":63.63,"humidity":67.71,"pressure":30.01,"windSpeed":3.38,"windDirection":180.02},{"time":"2021-11-17T10:00:00-08:00","temperature":66.33,"humidity":59.62,"pressure":30.02,"windSpeed":4.12,"windDirection":193.16},{"time":"2021-11-17T11:00:00-08:00","temperature":68.7,"humidity":52.65,"pressure":30,"windSpeed":4.05,"windDirection":179.94},{"time":"2021-11-17T12:00:00-08:00","temperature":70.56,"humidity":47.28,"pressure":29.98,"windSpeed":4.12,"windDirection":188.04},{"time":"2021-11-17T13:00:00-08:00","temperature":71.85,"humidity":43.61,"pressure":29.96,"windSpeed":4.99,"windDirection":201.08},{"time":"2021-11-17T14:00:00-08:00","temperature":72.7,"humidity":41.65,"pressure":29.95,"windSpeed":5.35,"windDirection":204.79},{"time":"2021-11-17T15:00:00-08:00","temperature":72.81,"humidity":41.63,"pressure":29.96,"windSpeed":5.32,"windDirection":207.4},{"time":"2021-11-17T16:00:00-08:00","temperature":71.96,"humidity":44.25,"pressure":29.96,"windSpeed":5.5,"windDirection":208.65},{"time":"2021-11-17T17:00:00-08:00","temperature":69.62,"humidity":51.47,"pressure":29.97,"windSpeed":6.62,"windDirection":203.3},{"time":"2021-11-17T18:00:00-08:00","temperature":67.35,"humidity":58.89,"pressure":30,"windSpeed":5.93,"windDirection":205.64},{"time":"2021-11-17T19:00:00-08:00","temperature":66.24,"humidity":62.49,"pressure":30.02,"windSpeed":4.65,"windDirection":198.76},{"time":"2021-11-17T20:00:00-08:00","temperature":65.52,"humidity":64.96,"pressure":30.03,"windSpeed":4.72,"windDirection":187.31},{"time":"2021-11-17T21:00:00-08:00","temperature":64.94,"humidity":67.44,"pressure":30.05,"windSpeed":4.03,"windDirection":173.33},{"time":"2021-11-17T22:00:00-08:00","temperature":64.45,"humidity":69.7,"pressure":30.05,"windSpeed":3.56,"windDirection":149.02},{"time":"2021-11-17T23:00:00-08:00","temperature":64.04,"humidity":71.79,"pressure":30.04,"windSpeed":4.09,"windDirection":147.58},{"time":"2021-11-18T00:00:00-08:00","temperature":63.52,"humidity":74.24,"pressure":30.04,"windSpeed":3.13,"windDirection":153.71},{"time":"2021-11-18T01:00:00-08:00","temperature":63.09,"humidity":76.09,"pressure":30.04,"windSpeed":3.74,"windDirection":177.52},{"time":"2021-11-18T02:00:00-08:00","temperature":62.85,"humidity":77.22,"pressure":30.03,"windSpeed":2.66,"windDirection":173.09},{"time":"2021-11-18T03:00:00-08:00","temperature":62.69,"humidity":77.69,"pressure":30.04,"windSpeed":2.95,"windDirection":178.21},{"time":"2021-11-18T04:00:00-08:00","temperature":62.42,"humidity":78.77,"pressure":30.04,"windSpeed":3.11,"windDirection":181.12},{"time":"2021-11-18T05:00:00-08:00","temperature":62.26,"humidity":79.3,"pressure":30.05,"windSpeed":3.11,"windDirection":200.7},{"time":"2021-11-18T06:00:00-08:00","temperature":62.08,"humidity":80.03,"pressure":30.06,"windSpeed":3.04,"windDirection":195.54},{"time":"2021-11-18T07:00:00-08:00","temperature":62.1,"humidity":79.96,"pressure":30.09,"windSpeed":1.32,"windDirection":198.34},{"time":"2021-11-18T08:00:00-08:00","temperature":63.03,"humidity":76.38,"pressure":30.1,"windSpeed":3.33,"windDirection":149.71},{"time":"2021-11-18T09:00:00-08:00","temperature":64.51,"humidity":71.31,"pressure":30.11,"windSpeed":3.8,"windDirection":138.82},{"time":"2021-11-18T10:00:00-08:00","temperature":66.58,"humidity":64.24,"pressure":30.11,"windSpeed":4.05,"windDirection":131.53},{"time":"2021-11-18T11:00:00-08:00","temperature":68.5,"humidity":57.58,"pressure":30.1,"windSpeed":3.62,"windDirection":161.49},{"time":"2021-11-18T12:00:00-08:00","temperature":69.85,"humidity":53.14,"pressure":30.08,"windSpeed":4.56,"windDirection":207.63}]]

  public weather_data:any;

  public weather_15: Weather[] = [];
  public weather_c: CurrentWeather = {};


  constructor(
    private http: HttpClient
  ) { }
  
  /** GET weather data from the server */
  async getWeatherData(url:string): Promise<any> {
    try{
      //let url="http://localhost:8081/search/?autodetect=true"
      this.weather_data = await this.http.get(url).toPromise();
      console.log(this.weather_data);
      this.getOneDayWeather();
      this.getCurrentWeather();
      return true;
    }catch(error){
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
    var url:string = 'https://ipinfo.io/?token=8154647fc6c0d6';
    /*
    this.http.get(url).subscribe((response) => {
      console.log(response);
    })
    */
    try{
      var ipData: any = await this.http.get(url).toPromise();
      console.log(ipData);
      var lat = ipData['loc'].split(',')[0].toString();
      var lng = ipData['loc'].split(',')[1].toString();
      var city = ipData['city'].replace(/ /g, '%20');
      var state = ipData['region'].replace(/ /g, '%20');
      // var newUrl = 'https://csci571hw8-57108.wl.r.appspot.com/search/?autodetect=true&lat=' + lat +'&lng=' + lng + '&city=' + city + '&state=' + state;
      var newUrl =
        'http://localhost:8081/search/?autodetect=true&lat=' +
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
    }catch(error){
      console.log('Error!', error);
      return false;
    }
    
  }


  getOneDayWeather(): void {
    var data = [];
    //data = JSON.parse(this.weather_data);
    data = this.weather_data;
    for (var i=0; i<15;i++){
      var w: Weather = {};
      w.date=data[1][i]['time'];
      w.datetime=data[1][i]['date'];
      w.status=data[1][i]['weatherCode'];
      w.statusimg = data[1][i]['icon'];
      w.temphigh=data[1][i]['temperatureMax'];
      w.templow=data[1][i]['temperatureMin'];
      w.windspeed=data[1][i]['windSpeed'];
      w.sunrise=data[1][i]['sunriseTime'];
      w.sunset=data[1][i]['sunsetTime'];
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
    this.weather_data=[];
    this.weather_15=[];
    this.weather_c={};
  }

}
