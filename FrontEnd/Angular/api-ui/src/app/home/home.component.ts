import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transactions.service';
import { Transaction } from '../../contracts/transactions.contracts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[TransactionService]
})
export class HomeComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getAllTransactions();
  }

   async getAllTransactions() {
    console.log('getAllTransactions');

    try {
      this.transactionService.fetch().subscribe((transactions) => {
        this.transactions = transactions;
        console.log(transactions);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
