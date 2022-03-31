import './App.css';
import React from 'react';
import axios from "axios";

function App() {
  const [duck, setDuck] = React.useState("https://random-d.uk/api/87.jpg");
  const getDuck = async () => {
    let json
    var config = {
      method: 'get',
      // url: 'https://random-d.uk/api/http/100.jpg'
      url: 'https://random-d.uk/api/quack',
      
  };
  await axios.get(config, { crossdomain: true,
    headers: {'Access-Control-Allow-Origin': true} })
    .then(function (response){
      json = response.data
        setDuck(json.url);
      console.log(response)
      console.log(response.data)
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
