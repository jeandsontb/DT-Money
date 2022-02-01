import { useContext } from 'react';
import { TransactionContext } from '../../transactionsContext';
import S from './styled';

const TransactionTable = () => {

  const transaction = useContext(TransactionContext);

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
          {transaction.map(tr => (
            <tr key={tr.id}>
              <td>{tr.title}</td>
              <td className={tr.type} >
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(tr.amount)}
              </td>
              <td>{tr.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(tr.createdAt))}  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}

export { TransactionTable };