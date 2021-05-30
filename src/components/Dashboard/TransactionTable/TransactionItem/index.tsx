import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

import IconButton from "components/IconButton";
import { ConfirmationModal, NewTransactionModal } from "components/Modals";
import useFormatCurrency from "hooks/formatCurrency";
import { useTransactions } from "hooks/useTransactions";
import { Transaction } from "models/Transaction";

interface TransactionItemProps {
  transaction: Transaction;
}

const formatCategory = {
  home: "Moradia",
  bills: "Contas",
  education: "Educação",
  food: "Comida",
  health: "Saúde",
  leisure: "Lazer",
  supermarket: "Mercado",
  transport: "Transporte",
  other: "Outros",
};

export function TransactionItem({ transaction }: TransactionItemProps) {
  const currencyValue = useFormatCurrency(transaction.amount);
  const { removeTransaction } = useTransactions();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false);

  function handleOpenEditModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseEditModal() {
    setIsNewTransactionModalOpen(false);
  }


  function handleOpenModal() {
    setIsConfirmModalOpen(true);
  }

  function handleCloseModal() {
    setIsConfirmModalOpen(false);
  }

  return (
    <>
      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onRequestClose={handleCloseModal}
        modalTitle="Você deseja excluir essa transação?"
        description="Ao confirmar, essa transação será excluída do seu histórico."
        onClickPrimaryButton={() => removeTransaction(transaction.id)}
        primaryButtonText="Excluir"
        onClickSecondaryButton={handleCloseModal}
        secondaryButtonText="Cancelar"
      />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseEditModal}
        transaction={transaction}
      />

      <tr>
        <td>{transaction.name}</td>
        <td className={transaction.type}>{currencyValue}</td>
        <td>{formatCategory[transaction.category]}</td>
        <td>
          {new Intl.DateTimeFormat("pt-BR").format(
            new Date(transaction.createdAt)
          )}
        </td>
        <td>
          <IconButton onClick={() => handleOpenEditModal()} title="Editar">
            <MdEdit fontSize={22} />
          </IconButton>
        </td>
        <td>
          <IconButton onClick={() => handleOpenModal()} title="Excluir">
            <MdDelete fontSize={22} />
          </IconButton>
        </td>
      </tr>
    </>
  );
}
