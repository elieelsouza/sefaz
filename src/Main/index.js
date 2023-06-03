import { api } from '../utils/api';

import { CenteredContainer, Container, TaskEmptyContainer, TaskEmptyImage, TasksContainer } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';
import ListaDados from '../ListaDados';

import { tasks as mock } from '../mocks/tasks';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { useEffect, useState } from 'react';
import NewTaskModal from '../components/NewTaskModal';
import EditTaskModal from '../components/EditTaskModal';

import empty from '../assets/images/task.png';

import { Text } from '../components/Text';
import { ActivityIndicator } from 'react-native';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState(null);
  const [taskBeingDeleted, setTaskBeingDeleted] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isListData, setisListData] = useState(false);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTasks(response.data);
      setIsLoading(false);
    });
  }, []);

  function handleDeleteTask(task) {
    setTaskBeingDeleted(task);
    setIsDeleteModalVisible(true);
  }

  async function handleConfirmDeleteTask() {
    await api.delete(`/tasks/${taskBeingDeleted.id}`);

    setTasks(prevState => prevState.filter(
      (task) => task.id !== taskBeingDeleted.id
    ))

    setIsDeleteModalVisible(false);
  }

  function handleEditTask(task) {
    setIsEditTaskModalVisible(true);
    setTaskBeingEdit(task);
  }

  async function handleCreateTask(task) {
    //Cadastro Tarefa
    const taskAdd = (await api.post('/tasks', task)).data;

    //Fecho Modal
    setIsNewTaskModalVisible(false);

    //Crio uma copia do array de tarefas
    const newTasks = tasks;
    //Adiciono a tarefa criada no inicio do array
    newTasks.unshift(taskAdd);

    //Atualizo o estado com as tarefas
    setTasks(newTasks);
  }

  

  return (
    <Container>
      <Header />
      <AddButton onPress={() => setisListData(true) } />

  
      <ListaDados 
        visible={isListData}
        onClose={() => setisListData(false)}
      />

    </Container >
  );
}