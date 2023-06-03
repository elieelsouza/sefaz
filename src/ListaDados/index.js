import { CenteredContainer, Container, TaskEmptyContainer, TaskEmptyImage, TasksContainer } from './styles';
import { tasks as mock } from '../mocks/tasks';
import { useEffect, useState } from 'react';
import { Text } from '../components/Text';

export default function ListaDados(visible, onClose) {
 
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container
        visible={visible}
        onClose={onClose} >
          
        <Text
        size={20}
        opacity={0.8}
        color='#FFFFFF'
        weight="600"
        style={{ marginTop: 16 }}>
        Sem Dados
      </Text>
      {/*      {!isLoading && (
        <TasksContainer>
          {tasks.length > 0 ? (
            <Tasks
              onDelete={handleDeleteTask}
              onEditTask={handleEditTask}
              tasks={tasks}
              onChangeStatus={handleChangeStatus}
            />
          ) : (
            <TaskEmptyContainer>
              <TaskEmptyImage source={empty} />

              <Text
                size={20}
                opacity={0.8}
                weight="600"
                style={{ marginTop: 16 }}>
                Sem Tarefas
              </Text>
              <Text opacity={0.5} style={{ marginTop: 8 }}>
                Não há tarefas a serem exibidas
              </Text>
            </TaskEmptyContainer>
          )}
        </TasksContainer>
      )}

      {/* {isLoading && (
        <CenteredContainer>
          <ActivityIndicator color="#666" size="large" />
        </CenteredContainer>
      )} */}


      {/* <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleConfirmDeleteTask}
      />*/}

      {/*      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

      {/* <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        task={taskBeingEdit}
        onSave={handleSaveEdit}
      />  */}
    </Container >
  );
}