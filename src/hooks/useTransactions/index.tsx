import { createContext, useContext, useEffect, useState } from "react";

import { saveLSItem, loadLSItem } from "services/localstorage";
import { Transaction } from "models/Transaction";

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
  removeTransaction: (transactionId: number) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const transactions = loadLSItem("transactionRegister");

    setTransactions(transactions);
  }, []);

  function createTransaction(transaction: TransactionInput) {
    const lsTransaction = saveLSItem("transactionRegister", transaction);

    const newTransaction = {
      ...lsTransaction,
      createdAt: new Date(),
    };

    setTransactions((oldValue) => [...oldValue, newTransaction]);
  }

  function removeTransaction(transactionId: number) {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    const lsTransactions = saveLSItem("transactionRegister", filteredTransactions);

    setTransactions(lsTransactions);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, removeTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
