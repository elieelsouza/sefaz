import { Text } from '../Text';
import { Container } from './styles';
import { Image } from 'react-native';
import styled from 'styled-components/native';

export default function Header() {
  return (
    <Container>
      <Image
        style={{
          resizeMode: 'contain',
          bottom: 10,
          width: 350,
        }}
        source={require('../../assets/images/sefaz.png')}
      />

      <Text color="#FFFFFF" size={24}>
        Transparencia 
        <Text color="#FFFFFF" size={24} weight="700"> SEFAZ</Text>
      </Text>
    </Container>
  );
}