import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
	stocks: any[];
	private authState: Observable<firebase.User>;
    private currentUser: firebase.User = null;

  constructor(private http: HttpClient, private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
  	
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  getStockData(callback) {
    this.login();
  	this.stocks= this.db.list('/stocks')
  	.valueChanges()
  	.subscribe(stocks => {
  		this.stocks= stocks;
  		console.log(this.stocks);
  		callback();
  	});
   }

  }
}
