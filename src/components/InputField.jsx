import React from 'react';

const InputField = ({labelName, inputFieldType, placeholder}) => {
    return (
        <div>
            <label htmlFor="">{labelName} :</label>
            <br/>
            <input type={inputFieldType} placeholder={placeholder}/>
            <br/>
            <br/>
            
        </div>
    );
};

export default InputField;