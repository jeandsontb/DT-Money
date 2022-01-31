import { useState } from 'react';
import Modal from 'react-modal';
import S from './styled';
import logoImg from '../../assets/logo.svg'

const Header = () => {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  const handleOpenTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  } 

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenTransactionModal} >
          Nova Transição
        </button>


        <Modal isOpen={isNewTransactionModalOpen}>
          <h2>Cadastrar</h2>
        </Modal>
      </S.Content>
    </S.Container>
  );
}

export { Header };