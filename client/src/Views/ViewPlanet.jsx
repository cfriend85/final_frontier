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
                console.log(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [loaded])
    
    return(
        <div>
            <a href="/"><button className="mt-3 m-5 btn btn-lg btn-outline-secondary text-light border-3 btnHome">Home</button></a>
            <h1 className="text-info p-5">{planet.englishName} Info</h1>
            <h3 className="text-info p-5">{planet.englishName}'s Gravity: {planet.gravity}</h3>
            <h3 className="text-info p-5">{planet.englishName}'s Average Temperature: {Math.round(planet.avgTemp - 273.15) * 9/5 + 32}° F</h3>
        </div>
    )
}

export default ViewPlanet;