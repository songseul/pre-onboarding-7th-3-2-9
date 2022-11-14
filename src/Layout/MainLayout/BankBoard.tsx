import React from 'react';
import * as S from '../../styles/MainStyle';
import BankTable from '../../components/common/main/BankTable';

const BankBoard = () => {
  return (
    <S.BankBoardStyle>
      <BankTable />
    </S.BankBoardStyle>
  );
};

export default BankBoard;