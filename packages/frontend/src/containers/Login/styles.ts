import styled from 'styled-components';
import { Card as CardStyled } from '@mui/material';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export const Card = styled(CardStyled)`
  padding: 20px;
  max-width: 420px;
  box-sizing: border-box;
`;
