import React, {useState} from 'react';
import './App.css';
const App = () => {
  return (
      <div>
        <h1>React Component</h1>
          <form action="">
              <label htmlFor="">First Name :</label>
              <input type="text" placeholder="Enter Your First Name"/>
              <br/>
              <label htmlFor="">Last Name :</label>
              <input type="text" placeholder="Enter Your Last Name"/>
              <br/>
              <label htmlFor="">Email :</label>
              <input type="email" placeholder="Enter Your Email"/>
              <br/>
              <label htmlFor="">Password :</label>
              <input type="password" placeholder="Enter Your Password"/>
          </form>
      </div>
  );
};

export default App;
