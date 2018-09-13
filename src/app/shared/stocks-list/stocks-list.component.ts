import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {
  stockData:any[]= [];
  stockForm = new FormGroup({
      name: new FormControl(),
      date: new FormControl(),
      open: new FormControl(),
      close: new FormControl(),
      high: new FormControl(),
      low: new FormControl(),
      totalShares: new FormControl()
    });

  constructor(private stockService: StockDataService,) {   
  }

  ngOnInit() {
    this.extractData();
  }

  /**
  Arrange data to display in view
  */
  extractData(){    
    this.stockData=[];
    this.stockService.stocks.forEach((stock)=>{
      for (let key of Object.keys(stock)) { 
        if(key !=='name'){
          let stockData={};
          let date= new Date(key.substr(4,4), key.substr(2,2),key.substr(0,2));
          stockData.name= stock.name;
          stockData.date= date.toLocaleDateString();
          stockData.open= stock[key].open;
          stockData.close= stock[key].close;
          stockData.high= stock[key].high;
          stockData.low= stock[key].low;
          stockData.totalShares= stock[key].totalShares;

          this.stockData.push(stockData);
        }       
      }
        
    })
    
  }

  editItem(event, item){
    this.stockForm.setValue({
      name: item.name,
      date: item.date,
      open: item.open,
      close: item.close,
      high: item.high,
      low: item.low,
      totalShares: item.totalShares
    });

     $("#editModal").modal({
        show: 'false'
    }); 
  }

  saveStockData(){
    //update form data in firebase
    const result = Object.assign({}, this.stockForm.value);
    $("#editModal").modal('hide');
  }

  deleteItem(event){
    //delete form data from firebase
  }

}
