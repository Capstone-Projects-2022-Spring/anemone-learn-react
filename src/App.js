import './App.css';
import React, {useEffect} from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import {BottomNavigationAction} from "@mui/material";
import Search from "./Search"
// import {RestoreIcon} from '@mui/icons-material/RestoreIcon';
// import FavoriteIcon from '@mui/icons-material/FavoriteIcon';
// import LocationOnIcon from '@mui/icons-material/LocationOnIcon';

function App() {
  const [cat, setCat] = React.useState("https://cdn.discordapp.com/attachments/881928505464610886/910348671890108456/20211116_195618.jpg");
  const [value, setValue] = React.useState(1);
  const [showSearch, setShowsearch] = React.useState(false);
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
          <>
              {showSearch ? <Search /> :   <><img src={cat} className="App-logo" alt="duck" />
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
                  </>
                  }
          </>

          <Button style={{
              backgroundColor: 'red'
          }} variant="contained" onClick={() => {
              getCat();
          }}>meow</Button>
          <Button style={{
              backgroundColor: 'blue'
          }} variant="contained" onClick={() => {
              setShowsearch(true);
          }}>Search</Button>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
        >
          <BottomNavigationAction label="Recents" icon={<Button />} />
          <BottomNavigationAction label="Favorites" icon={<Button />} />
          <BottomNavigationAction label="Nearby" icon={<Button />} />
        </BottomNavigation>
      </header>
    </div>
  );
}

export default App;
