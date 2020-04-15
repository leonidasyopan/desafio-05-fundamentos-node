import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    this.transactions.map(transaction => {
      let income = 0;
      let outcome = 0;
      if (transaction.type === 'income') {
        income = Number(transaction.value).reduce((total, currentValue) => {
          return total + currentValue;
        });
      } else {
        outcome = Number(transaction.value).reduce((total, currentValue) => {
          return total + currentValue;
        });
      }

      return income - outcome;
    });

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
