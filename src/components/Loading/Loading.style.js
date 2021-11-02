import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1rem solid ${({ theme }) => theme.colors.transparentPurple};
  border-right: 1.1rem solid ${({ theme }) => theme.colors.transparentPurple};
  border-bottom: 1.1rem solid ${({ theme }) => theme.colors.transparentPurple};
  border-left: 1.1rem solid ${({ theme }) => theme.colors.lightPurple};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${rotate} 1.1s infinite linear;
  animation: ${rotate} 1.1s infinite linear;

  ::after {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
`;
