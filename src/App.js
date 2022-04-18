import './App.css';
import React, {useEffect} from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
/**
 * The main App which renders all components
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    /* This is the value that we will send to the cat component to let it know to update! */
    const [shouldReload, setShouldReload] = React.useState(false); // 👈

    return (
        <div className="App">
            <header className="App-header">
                <>

                    <CatComponent shouldReload={shouldReload} setShouldReload={setShouldReload}/>
                    {/*
                    Notice how the button for change cat is OUTSIDE of the CatComponent,
                    but its able to control it by sharing the `shouldReload` variable and the
                    `setShouldReload` function.
                    */}
                    <Button variant={"contained"} onClick={()=>{
                        setShouldReload(true) // 👈 by setting this to true this triggers the `useEffect` function IN `CatComponent`
                        console.log(shouldReload)}}>Change Cat</Button>
                </>
            </header>
            <footer>

            </footer>
        </div>
    );
}


function CatComponent(props) {
    const [cat, setCat] = React.useState("https://cdn.discordapp.com/attachments/881928505464610886/910348671890108456/20211116_195618.jpg");
    /*
    useEffect listens for changes on a specific variable.
    When that variable changes it runs the entire useEffect Function.
     */
    useEffect(() =>{
        /*
        Since I don't want my cat to only reload when the property is changed to true
        I add an if statement to check whether the property is true or not.
         */
        if (props.shouldReload){
            getCat() /* Remember this function makes the RESTful call to the cat API
             and when it gets a response changes the value of the `cat` variable. Therefore updating the component.*/
            /*
            Once I get a new cat I need to set the value back to false otherwise
             we wont be able to update the cat again.
             */
            props.setShouldReload(false)
        }

    },[props.shouldReload])/*👈 here is where you define what variable useEffect listens for changes.
    Here I am listening to a passed property.
    */
    const getCat = async () => {
        let json
        await axios.get('https://dog.ceo/api/breeds/image/random')
            .then(function (response){
                json = response.data
                setCat(json.message);
                console.log(json)
            })
            .catch(err => {
                alert("something went wrong:"+err);
                //location.reload();
            })
    }
    return <><img src={cat} className="App-logo" alt="cat"/>
    </>;
}

export default App;
