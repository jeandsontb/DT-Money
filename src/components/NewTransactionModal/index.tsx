import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import S from './styled';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';


interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose}: newTransactionModalProps) => {

  const {createTransaction} = useTransactions();

  const [ type, setType ] = useState('deposit');
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ category, setCategory ] = useState('');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    
    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

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

      <S.Container onSubmit={handleCreateNewTransaction} >
        <h2>Cadastrar</h2>

        <input 
          type="text"
          placeholder='Título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> 

        <input 
          type="number"
          placeholder='Valor'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        /> 

        <S.TransactionTypeContainer>
          <S.RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox> 

          <S.RadioBox 
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>  

        <input 
          placeholder='Categoria'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />    

        <button type='submit'>
          Cadastrar
        </button>
      </S.Container> 
    </Modal>
  );
}

export { NewTransactionModal };