import React, {useState} from 'react';
import './App.css';
import ChildComponent1 from "./components/ChildComponent1.jsx";
const App = () => {
    const [myName, setMyName] = useState('kaveen');
    console.log(myName);
  return (
      <div>
        <h1>React Component</h1>
        <ChildComponent1
            name={myName}
            setMyName={setMyName}
        />
      </div>
  );
};

export default App;
