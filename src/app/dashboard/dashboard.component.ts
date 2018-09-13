import { Component, OnInit } from '@angular/core';
import { PriceVolumeGraphComponent } from '../shared/price-volume-graph/price-volume-graph.component';
import { StockDataService } from '../shared/stock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	stocksLoaded= false;

  constructor(private stockService: StockDataService,) {
  	
  }

  ngOnInit() {
  	this.stockService.getStockData(()=>this.stocksLoaded= true);  	
  }

}
