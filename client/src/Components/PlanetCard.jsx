import React, { useState, useEffect } from "react";
import axios from 'axios';


const PlanetCard = (props) => {

    const [planetPic, setPlanetPic] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${props.planet.englishName}`)
            .then(res => {
                console.log(res)
                setLoaded(true)
            })
            .catch(err => console.log(err))
        }, [loaded])
    
    return(
        <div>
            <a href="/"><button className="mt-3 m-5 btn btn-lg btn-outline-secondary text-light border-3 btnHome">Home</button></a>
            <h1 className="text-info p-5">Cool facts about {props.planet.englishName == "Sun"? "The Sun" : props.planet.englishName}</h1>
            <h3 className="text-info p-5">{props.planet.englishName}'s Gravity: {props.planet.gravity}</h3>
            <h3 className="text-info p-5">{props.planet.englishName}'s Average Temperature: {Math.round(props.planet.avgTemp - 273.15) * 9/5 + 32}° F</h3>
        </div>
    )
}

export default PlanetCard;