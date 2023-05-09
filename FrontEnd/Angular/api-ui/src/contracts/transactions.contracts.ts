export class Transaction {
  constructor(
    public transaction_id: string,
    public user_id: string,
    public account_id: string,
    public amount: number,
    public date: string,
    public iso_currency_code: string,
    public merchant_name: string,
    public pending: boolean
  ) {}
}
