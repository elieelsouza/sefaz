import { Text } from '../Text';
import { Container, Add } from './styles';


export default function PagamentosButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Add>
        <Text size={40} color="#FFFFFF">Pagamentos</Text>
      </Add>
    </Container>
  );
}