import './App.css';
import React, {useEffect} from 'react';
import axios from "axios";

function App() {
  const [duck, setDuck] = React.useState("https://random-d.uk/api/87.jpg");
  const getDuck = async () => {
    let json
      var config = {
          method: 'get',
          url: 'https://random-d.uk/api/v2/quack',
          headers: { }
      };

      await axios.get(config)
        .then(function (response){
          json = response.data
            // setDuck(json.url);
          console.log(json)
        })
        .catch(err => {
          alert("something went wrong:"+err);
          //location.reload();
        })
  }
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
          <button onClick={() => {
              getDuck();
          }}>quack</button>
      </header>
    </div>
  );
}

export default App;
