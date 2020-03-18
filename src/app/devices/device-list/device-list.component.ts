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
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private dashBoardService : DashboardService) { }

  data:any = [];
 
  ngOnInit(): void {

    interval(10000).pipe(
      startWith(0),
      switchMap(() => {
        return this.dashBoardService.getAll();
      })
    ).subscribe(res => {
      this.data = res; 
    }, error => { console.log(error); });

  }

}
