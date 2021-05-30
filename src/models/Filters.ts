import { TransactionCategory, TransactionType } from './Transaction'

export type SortBy = "valueAsc" | "valueDesc" | "dateAsc" | "dateDesc"

export interface Filters {
  filterCategory?: TransactionCategory;
  filterType?: TransactionType;
  sortOrder?: SortBy;
  searchBy?: string;
}