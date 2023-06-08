import { CenteredContainer, Container, TaskEmptyContainer, TaskEmptyImage, TasksContainer } from './styles';
import { tasks as mock } from '../../mocks/tasks';
import { useEffect, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import CustomModal from '../CustomModal';
import { Header } from './styles';
import close from '../../assets/images/close.png';
import { tasks } from '../../mocks/tasks';
import Tasks from '../Tasks';

export default function ListaDados({visible, onClose}) {
 
  //const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Header>
        <Text weight="600">Portal da Transparencia</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>
      <Tasks
        tasks={tasks}
      />
    </CustomModal>
  );
}