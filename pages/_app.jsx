import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';

import { LightMode, GlobalStyle, ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Main from '../layouts/Main';

function App(props) {
  const { Component, pageProps, router } = props;

  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <GlobalStyle />
        <Main router={router}>
          <Component {...pageProps} key={router.route} />
        </Main>
      </LightMode>
    </ChakraProvider>
  );
}

export default App;
