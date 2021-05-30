export type TransactionType = "deposit" | "withdraw";

export interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: TransactionType;
  category: string;
  createdAt: string;
}