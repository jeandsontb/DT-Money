import React, { useState } from "react";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Header } from './components/Header';
import { Dasboard } from "./components/Dasboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";



Modal.setAppElement('#root');

function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);  

  const handleOpenTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  } 

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
      <Dasboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </TransactionProvider>
  );
}

export default App;
