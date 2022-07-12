import React from 'react';

const img = "https://digital.ihg.com/is/image/ihg/even-hotels-eugene-5405616297-4x3"

const star = "★"*5

const st = (count) => {
    return "★"*count
}

const Hotel = (props) => {
    return (
        <div className='hotel-container'>
            <div className='hotel-icon'>
                <img src={img} alt='Hotel'/>
            </div>
            <div className='hotel-info'>
                <p>{props.name}</p>
                <p>{'★'.repeat(props.starsNumber)}</p>
                <p className='hotel-info-city'>{props.city}, {props.street}</p>
                <div className='hotel-conveniences'>
                    {
                        props.conveniences.map(convenience => {
                            return <div className="convenience-icon-container" data-title={convenience.name}>
                                        <img src={convenience.icon}/>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Hotel;