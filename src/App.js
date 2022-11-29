import logo from './logo.svg';
import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect} from "react";

function App() {
  //useEffect is a hook a new hook that can trigger an action replaces lifecycle hook
  //useState in order to save state in our app

  //useEffect takes two parameters the first is a function that happens with the effect triggers
  //second is a dependency array
  //dependency array tells he effect hook when to run
  useEffect(() => {
    //useEffect hooks cannot call out to async calls directly
    const getImage = async () => {
      const response = await getPictureOfTheDay();
      console.log("Parsed response body:", response);
    }

    getImage();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
