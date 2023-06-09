import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from '../Text';

import { Task, TaskAction, TaskDescription, TaskFooter, TaskHeader, TaskIcon, TaskStatus, TaskDate } from './styles';

//import pending from '../../assets/images/pending.png';
//import done from '../../assets/images/done.png';
//import excluir from '../../assets/images/delete.png';
//import edit from '../../assets/images/edit.png';

export default function Tasks({ tasks }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.Nr_da_OB}
      renderItem={({ item: task }) => (
        <Task>
          <TaskHeader>
            <Text size={18} weight="600">{task.Nome_Favorecido}</Text>
          </TaskHeader>

          <TaskDescription>
            <Text opacity={0.5}>Valor à Pagar: R${task.Valor_Pago}</Text>
          </TaskDescription>

          <TaskDate>
            <Text opacity={0.5}>Data Recebimento: {task.Data}</Text>
          </TaskDate>


          {/* <TaskFooter>
            <TaskStatus>
              <TaskIcon source={task.done ? done : pending} />
              <Text color={task.done ? '#2192D8' : '#E620AE'}>
                {task.done ? 'Feita' : 'Pendente'}
              </Text>
            </TaskStatus>
            <TaskAction>
              <TouchableOpacity
                onPress={() => alert("Abrir Modal de Edição")}
              >
                <TaskIcon source={edit} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onDelete(task)}
              >
                <TaskIcon source={excluir} />
              </TouchableOpacity>
            </TaskAction>
          </TaskFooter> */}
        </Task>
      )}
    />
  );
}