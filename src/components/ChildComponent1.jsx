import React from 'react';
import PropTypes from 'prop-types';
const ChildComponent1 = ({name, setMyName}) => {
    return (
        <div>
            Child Com 1
            {name}

            <button onClick={() => setMyName('Jayaweera')}>
                Change My Name
            </button>
        </div>
    );
};
ChildComponent1.propTypes = {
    name: PropTypes.number,
}
export default ChildComponent1;