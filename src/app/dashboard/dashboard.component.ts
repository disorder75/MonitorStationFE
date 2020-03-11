import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import { DashboardService, Dht11Item, Dht11ItemsResponse } from 'src/app/dashboard.service';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashBoardService : DashboardService) { }

  data:any = [];

  public options: any = {
    chart: {
      type: 'line',
      height: 500
    },
    title: {
      text: 'DHT11 sensor sampling'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: true
      }
    },
    series: [
      {
        name: 'Temperature',
        turboThreshold: 500000,
      },
      {
        name: 'Humidity',
        turboThreshold: 500000,
      }
    ]
  } 

  ngOnInit() {
    Highcharts.chart('container', this.options);
    interval(10000).pipe(
      startWith(0),
      switchMap(() => {
        return this.dashBoardService.getAll();
      })
    ).subscribe(res => {
      this.data = res; 

      const temperatures_data = [];
      const humidities_data = [];

      this.data.forEach(row => {
      
        const temperature_row = [
          new Date(row.date).getTime(),
          parseFloat(row.temperature)
        ];
        temperatures_data.push(temperature_row);
        
        const humidity_row = [
          new Date(row.date).getTime(),
          parseFloat(row.humidityRel)
        ];
        humidities_data.push(humidity_row);

      });
      this.options.series[0]['data'] = temperatures_data;
      this.options.series[1]['data'] = humidities_data;
      Highcharts.chart('container', this.options);

    }, error => { console.log(error); });

  } 
 
}
