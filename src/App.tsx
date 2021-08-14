import React from "react";
import "@fontsource/red-hat-display";
import GlobalStyle from "./styles/global";
import ThemeProvider from "./contexts/theming";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
