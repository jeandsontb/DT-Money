import { useEffect } from 'react';
import S from './styled';
import { api } from '../../services/api';

const TransactionTable = () => {

  useEffect(() => {
    api.get('/transaction')
    .then(response => console.log(response.data));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>28/10/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className='deposit' >R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>28/10/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className='withdraw' >- R$ 1.000</td>
            <td>Casa</td>
            <td>28/10/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}

export { TransactionTable };