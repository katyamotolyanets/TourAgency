import React, {useEffect, useState} from 'react';
import axios from "axios";

const Continents = (props) => {
    const [continents, setContinents] = useState([])



    useEffect(() => {
        axios.get('http://localhost:8000/api/continents/')
            .then(response => setContinents(response.data))
    }, [])

    return (
        <p className='continents'>
            Continents
            <div className='continents-container'>
                {continents.map(continent => (
                    <div className='continent'>
                        <p className='continent-name'>
                            {continent.name}
                            <div className='continent-countries'>
                                <div>
                                    <h4>OVERVIEW</h4>
                                    <p>
                                        Legend says that Ngorongoro Crater in Tanzania was the Garden of Eden, and
                                        it's still lush with forest, pasture, lakes, and animal life, not far from
                                        Oldupai, where some of the oldest human fossils have been found.
                                        The largest beasts on the planet still roam Africa, tribes still follow ancient
                                        ways and traditions, and you can't help but feel the pulse of a primal connection,
                                        and hear echoes of a distant past in the strange, magnificent, breathtaking landscapes.
                                    </p>
                                </div>
                                <div>
                                    <h4>DESTINATIONS</h4>
                                    {continent.countries.map(country => {
                                        return <p>{country.name}</p>
                                    })}
                                </div>

                            </div>
                        </p>

                    </div>
                ))}
            </div>
        </p>
    );
};

export default Continents;