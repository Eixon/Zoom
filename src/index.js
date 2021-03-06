import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import AOS from "aos";

import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
// import { store } from "./store/store";
import "./utils/i18n";

import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "./index.css";

AOS.init();

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
