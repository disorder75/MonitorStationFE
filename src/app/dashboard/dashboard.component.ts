import { Component, OnInit } from '@angular/core';
import { DashboardService, Dht11Item } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashBoardService : DashboardService) { }
  
  dht11Items: Dht11Item[];

  ngOnInit() {
    this.getDht11Items();
  }

  getDht11Items() {
    this.dashBoardService.getAll()
      .subscribe(dht11Items => {
        this.dht11Items = dht11Items;
      });
  }

}
