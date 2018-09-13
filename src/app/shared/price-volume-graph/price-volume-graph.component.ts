import { Component, OnInit, Directive, Input, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { StockDataService } from '../stock-data.service';


@Component({
  selector: 'app-price-volume-graph',
  templateUrl: './price-volume-graph.component.html',
  styleUrls: ['./price-volume-graph.component.css']
})
export class PriceVolumeGraphComponent implements OnInit {
@ViewChild('priceChart') private priceChartRef;   
@ViewChild('volumeChart') private volumeChartRef;   
   priceChart: any;
   volumeChart: any;
   stockData={
   	   selectedStock: 0,
	   dates: [],
	   closingPrices: [],
	   volume: [],
	   name: ""
   };
   
   
  constructor(private stockService: StockDataService,) {
  	
  }

  ngOnInit() {
  	this.createGraphs();  	
  }

  changeStockData(event){
  	this.stockData.selectedStock= event.target.value;
  	this.updateGraphs();
  }

  extractData(){
  	let stockData= this.stockService.stocks[this.stockData.selectedStock]
  	this.stockData.dates=[];
  	this.stockData.closingPrices=[];
  	this.stockData.volume= [];

  	for (let key of Object.keys(stockData)) {  
	  if(key =='name'){
	  	this.stockData.name= stockData[key];
	  }
	  else{
	  	let date= new Date(key.substr(4,4), key.substr(2,2),key.substr(0,2));	  	
	  	this.stockData.dates.push(date.toLocaleDateString());
	  	this.stockData.closingPrices.push(stockData[key].close);
	  	this.stockData.volume.push(stockData[key].totalShares);
	  }
	}
  }

  updateGraphs(){
  	this.extractData();

  	this.priceChart.data = this.getChartData('closingPrices');
  	this.priceChart.options = this.getChartOptions();

  	this.volumeChart.data = this.getChartData('volume');
  	this.volumeChart.options = this.getChartOptions();

    
    this.priceChart.update();
    this.volumeChart.update();
  }

  getChartData(type){
  	return {
	        labels: this.stockData.dates,
	        datasets: [{
	            label: this.stockData.name+" "+type,
	            data: this.stockData[type],
	            backgroundColor: 'rgba(54, 162, 235, 0.2)',
	            borderColor: 'rgba(54, 162, 235, 1)',
	            borderWidth: 1
	        }]
	    };
  }

  getChartOptions(){
  	return {
	    	responsive:true,
			maintainAspectRatio: false,
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
		    }
		  };
  }

  createGraphs(){  	
  	this.extractData();

  	this.priceChart = new Chart(this.priceChartRef.nativeElement, {
	  type: 'bar',
	  data: this.getChartData('closingPrices'),
	  options: this.getChartOptions()
	});

  	//updating data for volume graph
	// data.datasets[0].data= this.stockData.volume;
	// data.datasets[0].label= this.stockData.name+" Closing Shares"

	this.volumeChart = new Chart(this.volumeChartRef.nativeElement, {
	  type: 'bar',
	  data: this.getChartData('volume'),
	  options: this.getChartOptions()
	});
  }

}
