import React from 'react';
import ChildComponent3 from "./ChildComponent3.jsx";

const ChildComponent2 = () => {
    return (
        <div>
            <h1>Child Com2</h1>
            <ChildComponent3  />
        </div>
    );
};

export default ChildComponent2;