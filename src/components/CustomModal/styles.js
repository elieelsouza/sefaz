import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 10px  ;
  width: 100%;
`;

export const ModalBody = styled.View`
  background: #FFFFFF;
  flex: 1; 
  justify-content: center;
  align-items: center;
  gap: 24px;
`;