import { useState } from "react";

import { Header } from "components/Header";
import { Dashboard } from "components/Dashboard";
import { NewTransactionModal } from "components/Modals";
import { TransactionsProvider } from "hooks/useTransactions";

import GlobalStyles from "styles/global";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
}

export default App;
