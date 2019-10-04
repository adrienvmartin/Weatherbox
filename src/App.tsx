import React, { Fragment } from "react";
import "./App.css";
import { CssBaseline, Container } from "@material-ui/core";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <Main />
      </Container>
    </Fragment>
  );
}

export default App;
