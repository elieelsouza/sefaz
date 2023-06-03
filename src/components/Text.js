import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${({ weight }) => weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
  color: ${({ color }) => color || '#185BA3'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
  text-align: center;
`;
