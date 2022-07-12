import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";

const HotelPage = (props) => {
    const [hotel, setHotel] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/hotels/${id}/`)
            .then(response => setHotel(response.data))
    },[])
    return (
        <div>
            <h1>{hotel.name}</h1>
        </div>
    );
};

export default HotelPage;