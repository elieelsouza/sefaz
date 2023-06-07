import { api } from '../utils/api';

import { CenteredContainer, Container, TaskEmptyContainer, TaskEmptyImage, TasksContainer } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import PagamentosButton from '../components/PagamentosButton';
import ListaDados from '../components/ListaDados';

import { tasks as mock } from '../mocks/tasks';
import { useEffect, useState } from 'react';

import { Text } from '../components/Text';
import { ActivityIndicator } from 'react-native';

export default function Main() {
  
  const [isListData, setisListData] = useState(false);

  return (
    <Container>
      <Header />
      <PagamentosButton onPress={() => setisListData(true) } />

      <ListaDados 
        visible={isListData}
        onClose={() => setisListData(false)}
      />

    </Container >
  );
}