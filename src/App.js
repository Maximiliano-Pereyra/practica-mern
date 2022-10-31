import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src= 'https://th.bing.com/th/id/R.ef0a4f7e33f944227f3a467386720f42?rik=hRykddKhNdN9wg&pid=ImgRaw&r=0' width='300px' height='150px' className="App-logo"  alt="logo" />
        <p>
          Aca se edita lo que se ve, en <code>src/App.js</code>. Puse el escudo de boca para probar otra img.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
