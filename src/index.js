import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./Components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <React.StrictMode>
      <App />
   </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);