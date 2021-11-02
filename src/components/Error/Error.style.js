import styled from 'styled-components';

export const ErrorMessage = styled.h2`
  color: ${({ theme }) => theme.colors.red};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
