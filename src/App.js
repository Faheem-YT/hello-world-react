import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from Faheem!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/c/Faheem_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe
        </a>
      </header>
    </div>
  );
}

export default App;
