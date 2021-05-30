import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { Transaction } from "models/Transaction";
import { Filters } from "models/Filters";

import { useTransactions } from "../useTransactions";

interface FiltersProviderProps {
  children: React.ReactNode;
}

interface FiltersContextData {
  filteredTransactions: Transaction[];
  updateFilters: (filters: Filters) => void;
}

const sortFilters = {
  valueDesc: (a: Transaction, b: Transaction) => b.amount - a.amount,
  valueAsc: (a: Transaction, b: Transaction) => a.amount - b.amount,
  dateDesc: (a: Transaction, b: Transaction) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  dateAsc: (a: Transaction, b: Transaction) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
};

const FiltersContext = createContext<FiltersContextData>(
  {} as FiltersContextData
);

export function FiltersProvider({ children }: FiltersProviderProps) {
  const { transactions } = useTransactions();

  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [filters, setFilters] = useState<Filters>();

  const updateFilters = useCallback(
    (filters: Filters) => setFilters(filters),
    []
  );

  const applyFilters = useCallback(() => {
    if (!filters) return;

    const { searchBy, filterCategory, filterType, sortOrder } = filters;
    let filterResult = [...transactions];

    if (searchBy) {
      const lowerCaseSearch = searchBy.toLowerCase();

      filterResult = filterResult.filter((transaction) =>
        transaction.name.toLowerCase().startsWith(lowerCaseSearch)
      );
    }

    if (filterType) {
      filterResult = filterResult.filter(
        (transaction) => transaction.type === filterType
      );
    }

    if (filterCategory) {
      filterResult = filterResult.filter(
        (transaction) => transaction.category === filterCategory
      );
    }

    if (sortOrder) {
      const sortFunction = sortFilters[sortOrder];

      filterResult.sort(sortFunction);
    }

    setFilteredTransactions(filterResult);
  }, [transactions, filters]);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <FiltersContext.Provider value={{ filteredTransactions, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);

  return context;
}
