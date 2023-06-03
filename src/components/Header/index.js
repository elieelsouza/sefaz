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
          // height:200,
          width: 350,
          //justifyContent: 'absolute',
          //alignContent: 'center',
        }}
        source={require('../../assets/images/sefaz.png')}
      />

      <Text size={24}>
        Transparencia 
        <Text  size={24} weight="700"> SEFAZ</Text>
      </Text>
    </Container>
  );
}