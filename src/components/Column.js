import React from 'react';

const Column = (props) => {
    return (

        <div className="col">
            {props.status.title}
        </div>

    );
};

export default Column;