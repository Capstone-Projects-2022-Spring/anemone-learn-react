import './App.css';
import React, {useEffect} from 'react';

function App() {
  const [duck, setDuck] = React.useState("https://random-d.uk/api/87.jpg");

  return (
    <div className="App">
      <header className="App-header">
        <img src={duck} className="App-logo" alt="duck" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
