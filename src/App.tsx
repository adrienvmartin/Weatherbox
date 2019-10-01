import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { CssBaseline, Container } from "@material-ui/core";
import Main from "../src/components/Main";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <CssBaseline />
        <Container>
          <Main />
        </Container>
      </Fragment>
    </Provider>
  );
}

export default App;
