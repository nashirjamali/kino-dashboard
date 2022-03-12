import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/600.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { LightMode, GlobalStyle } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <GlobalStyle />
        <Component {...pageProps} />
      </LightMode>
    </ChakraProvider>
  );
}

export default App;
