import React from "react";

import ExperienceBar from "./components/ExperienceBar";

import GlobalStyle from "./styles/globalStyles";
import { Container } from "./styles/AppStyles";

function App() {
  return (
    <Container>
      <ExperienceBar />
      <GlobalStyle />
    </Container>
  );
}

export default App;
