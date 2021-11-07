import React, { useState, useEffect } from "react";
import axios from 'axios';
const PlanetCard = (props) => {

    const [planetPic, setPlanetPic] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${props.planet.englishName}`)
            .then(res => {
                setPlanetPic(res.data.collection.items[6].links[0].href)
                setLoaded(true)
            })
            .catch(err => console.log(err))
        }, [loaded])
    
    return(
        <div>
            <img src={planetPic} alt="" />
            <p className="text-info text-decoration-underline">Cool facts about {props.planet.englishName == "Sun"? "The Sun" : props.planet.englishName}</p>
            <p className="text-info">{props.planet.englishName}'s Gravity: {props.planet.gravity}</p>
            <p className="text-info">{props.planet.englishName}'s Average Temperature: {Math.round(props.planet.avgTemp - 273.15) * 9/5 + 32}° F</p>
        </div>
    )
}

export default PlanetCard;