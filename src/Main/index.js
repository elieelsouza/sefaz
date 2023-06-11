import React, { useState } from 'react';
import Header from '../components/Header';
import ListaDados from '../components/ListaDados';
import PagamentosButton from '../components/PagamentosButton';
import { Container } from './styles';

export default function Main() {
  const [isListDataVisible, setIsListDataVisible] = useState(false);

  const handleOpenListData = () => {
    setIsListDataVisible(true);
  };

  const handleCloseListData = () => {
    setIsListDataVisible(false);
  };

  return (
    <Container>
      <Header />
      <PagamentosButton onPress={handleOpenListData} />

      {isListDataVisible && (
        <ListaDados visible={isListDataVisible} onClose={handleCloseListData} />
      )}
    </Container>
  );
}
