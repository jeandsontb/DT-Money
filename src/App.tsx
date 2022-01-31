import React, { useState } from "react";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Header } from './components/Header';
import { Dasboard } from "./components/Dasboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <React.Fragment>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
      <Dasboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </React.Fragment>
  );
}

export default App;
