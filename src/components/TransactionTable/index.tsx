import { useTransactions } from '../../hooks/useTransactions';
import S from './styled';

const TransactionTable = () => {

  const {transactions} = useTransactions();

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
          {transactions.map(tr => (
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