import './App.css';
import React, {useEffect} from 'react';
import axios from "axios";

function App() {
  const [cat, setCat] = React.useState("https://cdn.discordapp.com/attachments/881928505464610886/910348671890108456/20211116_195618.jpg");
  const getCat = async () => {
    let json
      await axios.get('https://cataas.com/cat?json=true')
        .then(function (response){
          json = response.data
            setCat('https://cataas.com'+json.url);
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
        <img src={cat} className="App-logo" alt="duck" />
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
              getCat();
          }}>meow</button>
      </header>
    </div>
  );
}

export default App;
