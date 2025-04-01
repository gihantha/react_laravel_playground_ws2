import React, {useState} from 'react';
import './App.css';
import ChildComponent1 from "./components/ChildComponent1.jsx";
import {FirstContext} from "./utilities/context/FirstContext.js";

const App = () => {
    const [myName, setMyName] = useState("Kaveen");
    const [count, setCount] = useState(87);
  return (
      <div>
        <h1>React Component</h1>
            <FirstContext.Provider value={{myName, count}}>
                <ChildComponent1 />
            </FirstContext.Provider>
      </div>
  );
};

export default App;
