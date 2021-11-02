import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 0;
`;

export const List = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 80rem;
    margin: 0 auto 2rem;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  max-width: 45rem;
  margin: 0 auto 1rem;
  position: relative;

  ${({small}) => small && css`
    max-width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Input = styled.input`
  border: 0.15rem solid ${({ theme }) => theme.colors.purple};
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 45rem;
  display: block;
  margin: 2rem auto;
`;

export const RadioInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  border: 0.15rem solid ${({ theme }) => theme.colors.purple};
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.purple : theme.colors.white};
  color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.black)};
  font-size: 1.4rem;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 45rem;
  margin: 1rem auto;
  height: 5rem;

  @media (min-width: 768px) {
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 80rem;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 0.15rem solid ${({ theme }) => theme.colors.purple};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const EnginePowerList = styled.ul`
  display: flex;
  justify-content: space-around;
  max-width: 30rem;
  margin: 0 auto 2rem;
`;
