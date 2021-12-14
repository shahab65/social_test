import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/Daricheh-v1.0/style.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import NavigateSetter from "./components/NavigateSetter";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigateSetter />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
