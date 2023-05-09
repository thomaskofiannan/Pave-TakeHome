import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { constants } from '../shared/constants';
import { Transaction } from '../contracts/transactions.contracts';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private headers: HttpHeaders;

  transactions = new Subject<Transaction[]>();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer`,
    });
  }

  fetch() {
    this.http
      .get<Transaction[]>(`${constants.url}/transactions`, {
        headers: this.headers,
        withCredentials: false,

      })
      .toPromise()
      .then((transactions) => this.transactions.next(transactions));

    return this.transactions.asObservable();
  }
}
