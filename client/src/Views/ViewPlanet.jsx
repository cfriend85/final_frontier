import React, { useState, useEffect } from "react";
import axios from 'axios';
import Planet from '../Components/Planet';


const ViewPlanet = (props) => {

    const [planet, setPlanet] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${props._id}`)
            .then(res => {
                setPlanet(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [loaded])
    
    return(
        <div>
            <h1 className="text-info p-5">{planet.englishName} Info</h1>
            <button className="mt-3 m-5 btn btn-lg btn-outline-secondary text-light border-3 btnHome">Home</button>

        </div>
    )
}

export default ViewPlanet;