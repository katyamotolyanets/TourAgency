import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";

import '../../App.scss'
import Highlight from "./Highlight";

const TourPage = () => {
    const [tour, setTour] = useState({})
    const {id} = useParams();
    const {
        title,
        price,
        images,
        tour_type,
        days,
        nights,
        features
    } = tour

    useEffect(() => {
        axios.get(`http://localhost:8000/api/tours/${id}/`)
            .then(response => setTour(response.data))
    },[])

    const poster = images?.slice(0)

    return (
        <div className='tour-container tour-block'>
            <div className='tour-details tour-block'>
                <div className='tour-header'>
                    <p className='block-header'>{tour_type}</p>
                    <h1>{title}</h1>
                </div>
                <div className='tour-info'>
                    <div className='tour-info-cell'>
                        <p>DAYS</p>
                        <p className='large-paragraph'>{days}</p>
                    </div>
                    <div className='tour-info-cell'>
                        <p>PRICE</p>
                        <p className='large-paragraph'>${price}</p>
                    </div>
                    <div className='tour-info-cell'>
                        <p>JOURNEY TYPE</p>
                        <p className='large-paragraph'>{tour_type}</p>
                    </div>
                    <div className='tour-info-cell'>
                        <p>CITIES & LANDMARKS</p>
                        <ul>
                            {
                                features?.map(feature => (
                                    <li>{feature.destination.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className='tour-poster tour-block'>
                {
                    poster ?
                        <img src={poster} alt='Tour Image'/>
                        :
                        null
                }
            </div>
            <div className='tour-highlights tour-block'>
                <div className='tour-highlights-subinfo tour-block'>
                    <p className='block-header'>EXPERIENCES OF A LIFETIME</p>
                    <p>In the heart of the reserves, spot leopards, lions, elephants, impalas, and zebras… attend wine tastings,
                        special presentations and lectures with local experts...
                        and experience the vast legacy of cultural and natural history that makes up South Africa!</p>
                </div>
                <div className='highlights-blocks'>
                    {
                        features?.map(feature => (
                            feature.destination.image ?
                                <Highlight
                                    image={feature.destination.image}
                                    title={feature.destination.name}
                                    description={feature.destination.description}
                                />
                                :
                                null
                        ))
                    }
                </div>
                <div className='tour-schedule tour-block'>
                    <div className='tour-schedule-header tour-block'>
                        <p className='block-header'>{days} DAYS OF YOUR JOURNEY</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TourPage;