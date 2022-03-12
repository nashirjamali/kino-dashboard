import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { LightMode, GlobalStyle } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LightMode>
    </ChakraProvider>
  );
}

export default App;
