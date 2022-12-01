import logo from './logo.svg';
import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect, useState} from "react";

function App() {
  const [pod,setPod] = useState(null);
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

      setPod(response);
    }

    getImage();
  }, []);
  return (
    <div>
      {
        pod ?
            <div>
              <h1>{pod.title}</h1>
              <p>{pod.explanation}</p>
              <img src={pod.hdurl} alt={pod.title} width={"400px"}/>
            </div>
            :
            <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
