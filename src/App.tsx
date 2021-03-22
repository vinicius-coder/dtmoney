import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionalModal } from "./components/NewTransactionalModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {

  const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransitionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionalModal
        isOpen={isNewModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </ TransactionsProvider>
  );
}