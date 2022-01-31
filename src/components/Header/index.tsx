import S from './styled';
import logoImg from '../../assets/logo.svg'

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">
          Nova Transição
        </button>
      </S.Content>
    </S.Container>
  );
}

export { Header };