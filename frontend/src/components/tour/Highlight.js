import React from 'react';

const Highlight = (props) => {
    return (
        <div className='highlight-container'
             style={{backgroundImage: `url(${props.image})`}}
        >
            <p className='highlight-title'>{props.title}</p>
            <div className='highlight-description tour-block'>
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>
        </div>

    );
};

export default Highlight;