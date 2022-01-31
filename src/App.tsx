import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Header } from './components/Header';
import { Dasboard } from "./components/Dasboard";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Dasboard />
    </React.Fragment>
  );
}

export default App;
