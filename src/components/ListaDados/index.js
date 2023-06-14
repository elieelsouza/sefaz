import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import close from '../../assets/images/close.png';
import { tasks } from '../../mocks/tasks';
import CustomModal from '../CustomModal';
import Tasks from '../Tasks';
import { Text } from '../Text';
import { Header } from './styles';

export default function ListaDados({ visible, onClose }) {

  return (
    <CustomModal visible={visible} onClose={onClose}>
      <Header>
        <Text weight="600">Portal da Transparência</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>
      <Tasks tasks={tasks} />
    </CustomModal>
  );
}
