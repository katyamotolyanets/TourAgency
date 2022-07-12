import React, {useEffect, useState} from 'react';
import axios from "axios";
import Hotel from "./Hotel";
import '../../App.scss'

const HotelsPage = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/hotels/")
            .then(response => setHotels(response.data))
    }, [])

    return (
        <div className='hotels-container'>
            {
                hotels.map(hotel => (
                    <Hotel
                        name={hotel.name}
                        starsNumber={hotel.stars_number}
                        city={hotel.city.name}
                        street={hotel.street}
                        conveniences={hotel.conveniences}
                        description={hotel.description}
                    />
                ))
            }
        </div>
    );
};

export default HotelsPage;