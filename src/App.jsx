import React, {useState} from 'react';
import './App.css';
import ChildComponent1 from "./components/ChildComponent1.jsx";

const App = () => {
    const [name, setMyName] = useState("Kaveen");
  return (
      <div>
        <h1>React Component</h1>
          <ChildComponent1 name={name} />

          {/*Week 5 1.31*/}
      </div>
  );
};

export default App;
