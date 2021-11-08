import React, { useState, useEffect } from "react";
import axios from 'axios';
import Mars from '../Images/Mars.jpg'
import Uranus from '../Images/Uranus.jpg'
const PlanetCard = (props) => {

    const [planetPic, setPlanetPic] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${props.planet.englishName}`)
            .then(res => {
                if (props.planet.englishName == "Mars") {
                    setPlanetPic(Mars)
                }
                else if(props.planet.englishName == "Uranus"){
                    setPlanetPic(Uranus)
                }
                else{
                    setPlanetPic(res.data.collection.items[6].links[0].href)
                }
                setLoaded(true)
            })
            .catch(err => console.log(err))
        }, [loaded])
    
    return(
        <div className="planetCard">
            <img src={planetPic} alt={props.planet.englishName} className="planetPic"/>
            <p className="text-info text-decoration-underline">Cool facts about {props.planet.englishName == "Sun"? "The Sun" : props.planet.englishName}</p>
            <p className="text-info">{props.planet.englishName}'s Gravity: {props.planet.gravity}</p>
            <p className="text-info">{props.planet.englishName}'s Average Temperature: {Math.round(props.planet.avgTemp - 273.15) * 9/5 + 32}° F</p>
            <p className="text-info">{props.planet.englishName} has {props.planet.moons? props.planet.moons.length : 0} moon(s)!</p>
        </div>
    )
}

export default PlanetCard;