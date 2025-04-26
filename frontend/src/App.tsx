import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const apiUrl = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}`;
  console.log(import.meta.env);
  // const CONFIG_MAP = {
  //   PORT: parseInt(import.meta.env.VITE_FRONTEND_PORT || "3000"),
  //   BACKEND_PORT: parseInt(import.meta.env.VITE_BACKEND_PORT || "8000"),
  //   API_URL: import.meta.env.VITE_API_URL
  //     ? `http://localhost:${import.meta.env.VITE_BACKEND_PORT || "8000"}`
  //     : "http://localhost:8000",
  // };

  // useEffect(() => {
  //   console.log('Fetching data from API...');
  //   fetch(`${apiUrl}/api/users`)
  //     .then(res => res.json())
  //     .then(data => console.log(data.message));
  // }, []);
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
