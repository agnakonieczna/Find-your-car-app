import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Text = styled.p`
  margin: 2rem 0;
  text-align: center;
`;

export const SmallText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;
