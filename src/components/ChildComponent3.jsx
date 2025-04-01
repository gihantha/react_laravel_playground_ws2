import React, { useContext } from "react";
import { FirstContext } from "../utilities/context/FirstContext.js";

const ChildComponent3 = () => {
  const { myName, count } = useContext(FirstContext);
  return (
    <div>
      <h1>Child Com3</h1>
      <p>{myName}</p>
      <p>{count}</p>
    </div>
  );
};

export default ChildComponent3;
