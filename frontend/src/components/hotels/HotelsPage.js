import React, {useEffect, useState} from 'react';
import axios from "axios";

const HotelsPage = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/hotels/")
            .then(response => setHotels(response.data))
    }, [])

    return (
        <div>
            <ul>
                {
                    hotels.map(hotel => (
                        <li>{hotel.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HotelsPage;