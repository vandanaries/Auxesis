import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriceVolumeGraphComponent } from './shared/price-volume-graph/price-volume-graph.component';
import { StockDataService } from './shared/stock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { StocksListComponent } from './shared/stocks-list/stocks-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
	{ 
  		path: 'dashboard', 
  		component: DashboardComponent
	}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PriceVolumeGraphComponent,
    StocksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [StockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
