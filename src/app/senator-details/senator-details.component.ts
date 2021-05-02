import { StockTrackerService } from './../stock-tracker.service';
import { Component, OnInit, Input } from '@angular/core';
import { Transactions } from '../models/transactions';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-senator-details',
  templateUrl: './senator-details.component.html',
  styleUrls: ['./senator-details.component.css']
})
export class SenatorDetailsComponent implements OnInit {

  senator: string;

   @Input() transactions?: Transactions[];

  constructor(private stockTrackerService: StockTrackerService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getSenatorTransactions();
  }

  getSenatorTransactions(): void {
    const senator = this.route.snapshot.paramMap.get('senator');
    this.senator = senator;
    console.log(senator);
    this.stockTrackerService.getStockTransactions().subscribe(data => {
      this.transactions = data['transactions'].filter(transaction => {
        if (transaction['senator'] === senator){
          console.log(transaction);
        }
        console.log(transaction['senator'] === senator);
        return transaction['senator'] === senator;
      });
      console.log(this.transactions);
    });  
  }

}
