import React, { Fragment } from "react";
import "./App.css";
import { CssBaseline, Container, Paper } from "@material-ui/core";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <Paper>
          <Main />
        </Paper>
      </Container>
    </Fragment>
  );
}

export default App;
