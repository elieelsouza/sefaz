import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
background: rgba(0, 0, 0, 0.5);
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
justify-content: center;
align-items: center;
`;

export const ModalBody = styled.View`
  background: #FFFFFF;
  flex: 1; 
  justify-content: center;
  align-items: center;
  gap: 24px;
`;