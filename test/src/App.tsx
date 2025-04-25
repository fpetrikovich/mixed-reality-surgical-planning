import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const apiUrl = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}`;

console.log('API URL:', apiUrl);

function App() {
  useEffect(() => {
    console.log('Fetching data from API...');
    fetch(`${apiUrl}/api/hello`)
      .then(res => res.json())
      .then(data => console.log(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
