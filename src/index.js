import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import App from "./App";
import ScrollToTop from "./Components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <React.StrictMode>
      <Container>
        <App />
      </Container>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
