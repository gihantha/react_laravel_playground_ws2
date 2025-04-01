import React from "react";
import ChildComponent2 from "./ChildComponent2.jsx";

const ChildComponent1 = ({ name }) => {
  return (
    <div>
      <h1>Child com1</h1>
      <ChildComponent2 name={name} />
    </div>
  );
};

export default ChildComponent1;
