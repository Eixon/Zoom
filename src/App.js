import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import { store } from "./store/store";
import Home from "./containers/Home/Home";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
