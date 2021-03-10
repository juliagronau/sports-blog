import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Container>
        <App />
      </Container>
   </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);