import { Transactions } from './../models/transactions';
import { StockTrackerService } from './../stock-tracker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclosure-dashboard',
  templateUrl: './disclosure-dashboard.component.html',
  styleUrls: ['./disclosure-dashboard.component.css']
})
export class DisclosureDashboardComponent implements OnInit {

  transactions: Transactions[];

  constructor(private stockTrackerService: StockTrackerService) { }

  ngOnInit() {
    this.stockTrackerService.getStockTransactions().subscribe(data => {
      this.transactions = data['transactions'].slice(0, 10);
    });      
  }

}
