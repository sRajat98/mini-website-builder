import React from "react";

//react-router-dom imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importing redux store and redux related dependencies
import store from "./redux/store";
import { Provider } from "react-redux";

//Theme Imports
import GlobalStyles from "./themes/GlobalStyle";

//importing required components for Rotues
import EditWeb from "../core/EditWeb/EditWeb";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router basename="/">
        <Route exact path="/" component={EditWeb} />
      </Router>
    </Provider>
  );
};

export default App;
