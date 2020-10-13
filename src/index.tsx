import React from 'react';
import ReactDOM from 'react-dom'; // é uma função que tem como método o render, que recebe os components e enviar para o index.html
import App from './App';

// o index envia para o html;
// React.StrictMode: ele sinaliza potênciais problemas. 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

