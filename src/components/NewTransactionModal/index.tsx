import Modal from 'react-modal';

import S from './styled';
import closeImg from '../../assets/close.svg';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose}: newTransactionModalProps) => {
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