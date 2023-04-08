import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';

highchartsMore(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    
  Highcharts = Highcharts;
  options: Object = {};
  private rst_list: any;

  weather_15: any;

  constructor(
    private weatherService: WeatherService      
  ) { }

  ngOnInit(): void {
    this.weather_15 = this.weatherService.weather_15;
    this.loadChart();
  }

  temp_chart_data(): void {
    for (var i=0; i<this.weather_15.length; i++){
      var day_list:any = [];
      var d:any = new Date(this.weather_15[i].datetime).getTime();
      day_list.push(d);
      day_list.push(this.weather_15[i].templow);
      day_list.push(this.weather_15[i].temphigh);
      this.rst_list.push(day_list);
    }
  }

  loadChart(): void {
    this.options = {
      chart: {
        type: 'arearange',
        zoomType: 'x',
        scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
        }
      },
      title: {
        text: 'Temperature Ranges (Min, Max)'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: null
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '°F',
        xDateFormat: '%A, %b %e'
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Tempreture',
        data: this.rst_list
      }]
    }

  }
  
}
