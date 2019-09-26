import React from "react";
import Routes from "./Routes";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme/theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }

  #root {
    height: 100%;
  }

`;

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
