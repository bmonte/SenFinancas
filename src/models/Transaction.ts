export type TransactionType = "deposit" | "withdraw";

export type TransactionCategory =
  | "home"
  | "supermarket"
  | "bills"
  | "transport"
  | "leisure"
  | "health"
  | "food"
  | "education"
  | "other";

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  createdAt: string;
}
