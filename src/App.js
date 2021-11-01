import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!formVisible ? (
          <Hero setFormVisible={setFormVisible} />
        ) : (
          <Form setFormVisible={setFormVisible} />
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
