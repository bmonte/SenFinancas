import { useState, useMemo, useEffect } from "react";
import Modal from "react-modal";

import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";
import closeImg from "assets/close.svg";
import {
  TransactionType,
  TransactionCategory,
  Transaction,
} from "models/Transaction";
import { useTransactions } from "hooks/useTransactions";

import {
  Container,
  TransactionTypeContainer,
  TransactionButton,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  transaction?: Transaction;
}

Modal.setAppElement("#root");

interface TransactionOption {
  id: number;
  value: string;
  type: TransactionCategory;
}

const transactionOptions: TransactionOption[] = [
  { id: 1, value: "Moradia", type: "home" },
  { id: 2, value: "Contas", type: "bills" },
  { id: 3, value: "Educação", type: "education" },
  { id: 4, value: "Comida", type: "food" },
  { id: 5, value: "Saúde", type: "health" },
  { id: 6, value: "Lazer", type: "leisure" },
  { id: 7, value: "Mercado", type: "supermarket" },
  { id: 8, value: "Transporte", type: "transport" },
  { id: 9, value: "Outros", type: "other" },
];

export function NewTransactionModal({
  isOpen,
  onRequestClose,
  transaction,
}: NewTransactionModalProps) {
  const { createTransaction, editTransaction } = useTransactions();

  const isEditingTransaction = useMemo(() => transaction !== undefined, [transaction]);

  const [type, setType] = useState<TransactionType>("deposit");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [category, setCategory] = useState<TransactionCategory>("home");

  useEffect(() => {
    if (!transaction) return;

    setName(transaction.name);
    setAmount(transaction.amount);
    setCategory(transaction.category);
    setType(transaction.type);
  }, [transaction]);

  function resetForm() {
    setName("");
    setAmount(undefined);
    setCategory("home");
    setType("deposit");

    onRequestClose();
  }

  function handleSubmitForm(event: React.FormEvent) {
    event.preventDefault();

    const formTransaction = {
      name,
      amount: amount ?? 0,
      type,
      category,
    };

    if (isEditingTransaction && transaction) {
      editTransaction(transaction.id, formTransaction);
    } else {
      createTransaction(formTransaction);
    }

    resetForm();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleSubmitForm}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          required
        />

        <TransactionTypeContainer>
          <TransactionButton
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionButton>

          <TransactionButton
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionButton>
        </TransactionTypeContainer>

        <select
          onChange={(e) => setCategory(e.target.value as TransactionCategory)}
          defaultValue={category}
          required
        >
          <option value="" disabled>Selecione uma categoria</option>
          {transactionOptions.map((transaction) => (
            <option
              key={transaction.id}
              value={transaction.type}
            >
              {transaction.value}
            </option>
          ))}
        </select>
        
        <button type="submit">{isEditingTransaction ? 'Editar' : 'Cadastrar'}</button>
      </Container>
    </Modal>
  );
}
