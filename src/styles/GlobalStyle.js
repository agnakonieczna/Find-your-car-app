import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.lightOrange};
  }

  h1 {
    font-size: 3rem;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.4rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
