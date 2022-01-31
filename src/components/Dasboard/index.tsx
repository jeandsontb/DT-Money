import React from 'react';
import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';

import S from './styled';

const Dasboard = () => {
  return (
    <S.Container>
      <Summary />
      <TransactionTable />
    </S.Container>
  );
}

export { Dasboard };