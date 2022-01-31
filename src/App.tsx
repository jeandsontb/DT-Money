import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Header } from './components/Header';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
    </React.Fragment>
  );
}

export default App;
