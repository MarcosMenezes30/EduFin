export type TransactionType = "income" | "expense";
export type ISODateString = `${number}-${number}-${number}`;

export interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
  date: ISODateString;
  type: TransactionType;
}
