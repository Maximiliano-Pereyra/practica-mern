import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // los etilos se importan directamente
import App from './App';
// la estructura de lo que se importa es lo siguiente
// primero escribo la pabra import
//segundo escribo el nombre de lo que necesito
// tercero escribo la palabre FROM, desde donde lo importo
// caurto escribo la ruta de lo que necesito
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// todo lo que necesite se tiene que importar

