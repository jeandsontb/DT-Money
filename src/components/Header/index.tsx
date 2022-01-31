import S from './styled';
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

const Header = ({onOpenTransactionModal}: HeaderProps) => {

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenTransactionModal} >
          Nova Transição
        </button>        
      </S.Content>
    </S.Container>
  );
}

export { Header };