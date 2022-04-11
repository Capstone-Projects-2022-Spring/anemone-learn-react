import './App.css';
import React, {useEffect} from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import {BottomNavigationAction, Paper} from "@mui/material";
import Search from "./Search"
// import {RestoreIcon} from '@mui/icons-material/RestoreIcon';
// import LocationOnIcon from '@mui/icons-material/LocationOnIcon';
import SearchIcon from '@mui/icons-material/Search';
import * as PropTypes from "prop-types";

function CatComponent() {
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
    return <><img src={cat} className="App-logo" alt="duck"/>
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
        <Button style={{
            backgroundColor: 'red'
        }} variant="contained" onClick={() => {
            getCat();
        }}>meow</Button>

    </>;
}

CatComponent.propTypes = {src: PropTypes.string};

function NameComponent(props) {
    return <><h1>{props.name}</h1>
    <button onClick={()=>{props.setName('Fay')}}>SET FAY</button>
    </>;
}

function App() {
  const [value, setValue] = React.useState(1);
  const [name, setName] = React.useState('Ian');
    const setNameContext = (context) => {
        console.log(context);
        setName(context);
    };
  function view(value) {
      // eslint-disable-next-line default-case
      switch (value) {
          case 0: return <Search/>
          case 1: return  <CatComponent/>
          case 2: return  <NameComponent name={name} setName={setNameContext} />
          default: return <CatComponent/>
      }
  }

  return (
    <div className="App">
      <header className="App-header">
          <>
              <h1>{name}</h1>
              {view(value)}
          </>



      </header>
        <footer>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<Button />} />
                    <BottomNavigationAction label="Nearby" icon={<Button />} />
                </BottomNavigation>
            </Paper>
        </footer>
    </div>
  );
}

export default App;
