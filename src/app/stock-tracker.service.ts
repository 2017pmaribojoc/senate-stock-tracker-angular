import { HttpClient } from '@angular/common/http';
import { Transactions } from './models/transactions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockTrackerService {

  constructor(private httpClient: HttpClient) { }

  getStockTransactions(): Observable<any> {
    return this.httpClient.get("assets/transactions.json");
  }

}
