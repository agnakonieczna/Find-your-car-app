import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Hero from './components/Hero/Hero';
import Form from './components/Form';

function App() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!formVisible ? (
          <Hero setFormVisible={setFormVisible} />
        ) : (
          <Form setFormVisible={setFormVisible} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
