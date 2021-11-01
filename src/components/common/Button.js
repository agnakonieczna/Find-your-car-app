import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 3rem;
  border: none;
  padding: 1.4rem 0;
  width: 12rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ back }) => (back ? 'row-reverse' : 'row')};
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  margin-left: ${({ singleBtn }) => (singleBtn ? 'auto' : 'unset')};
  position: ${({ singleBtn }) => (singleBtn ? 'relative' : 'absolute')};
  top: ${({last}) => last ? '100%' : '0'};
  left: ${({ back }) => (back ? '0' : 'unset')};
  right: ${({ back }) => (back ? 'unset' : '0')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  ::after {
    content: '';
    background-image: url(${arrow});
    background-size: cover;
    transform: ${({ back }) => (back ? 'rotate(-180deg)' : null)};
    display: inline-block;
    height: 1.4rem;
    width: 1.8rem;
    background-repeat: no-repeat;
    margin-left: ${({ back }) => (back ? '0' : '1rem')};
    margin-right: ${({ back }) => (back ? '1rem' : '0')};
  }
`;

export default Button;
