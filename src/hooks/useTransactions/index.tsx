import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { saveLSItem, loadLSItem } from "services/localstorage";
import { Transaction } from "models/Transaction";

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
  editTransaction: (transactionId: string, editTransaction: TransactionInput) => void;
  removeTransaction: (transactionId: string) => void;
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

  useEffect(() => {
    saveLSItem("transactionRegister", transactions);
  }, [transactions]);

  function createTransaction(transaction: TransactionInput) {
    const today = new Date();

    const newTransaction: Transaction = {
      ...transaction,
      id: uuidv4(),
      createdAt: today.toString(),
    };

    setTransactions((oldValue) => [...oldValue, newTransaction]);
  }

  function editTransaction(transactionId: string, editTransaction: TransactionInput) {
    const changedTransactions = transactions.map((transaction) =>
      transaction.id === transactionId
        ? {
            ...transaction,
            ...editTransaction,
          }
        : transaction
    );

    setTransactions(changedTransactions);
  }

  function removeTransaction(transactionId: string) {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    setTransactions(filteredTransactions);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, removeTransaction, editTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
