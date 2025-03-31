import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField.jsx";
const App = () => {
  return (
      <div>
        <h1>React Component</h1>
          <form action="">
              <InputField labelName={"First Name  "} inputFieldType={"text"} placeholder={"Enter Your First Name"}/>
              <InputField labelName={"Second Name  "} inputFieldType={"text"} placeholder={"Enter Your Second Name"}/>
              <InputField labelName={"Email  "} inputFieldType={"emaill"} placeholder={"Enter Your Email"}/>
              <InputField labelName={"Password  "} inputFieldType={"password"} placeholder={"Enter Your Password"}/>
          </form>
      </div>
  );
};

export default App;
