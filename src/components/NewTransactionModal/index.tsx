import { useState } from 'react';
import Modal from 'react-modal';

import S from './styled';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose}: newTransactionModalProps) => {

  const [ type, setType ] = useState('deposit');

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}  
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type='button' className='reactModalClose' onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container>
        <h2>Cadastrar</h2>

        <input 
          type="text"
          placeholder='Título'
        /> 

        <input 
          type="number"
          placeholder='Valor'
        /> 

        <S.TransactionTypeContainer>
          <S.RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox> 

          <S.RadioBox 
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Entrada</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>  

        <input 
          placeholder='Categoria'
        />    

        <button type='submit'>
          Cadastrar
        </button>
      </S.Container> 
    </Modal>
  );
}

export { NewTransactionModal };