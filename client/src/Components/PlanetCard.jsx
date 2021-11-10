import React, { useState, useEffect } from "react";
import axios from 'axios';
import Mars from '../Images/Mars.jpg'
import Uranus from '../Images/Uranus.jpg'
import Mercury from '../Images/Mercury.jpg'
import Neptune from '../Images/neptune.jpg'
const PlanetCard = (props) => {

    const [planetPic, setPlanetPic] = useState("");
    
    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${props.planet.englishName}`)
            .then(res => {
                if (props.planet.englishName === "Mars") {
                    setPlanetPic(Mars)
                }
                else if(props.planet.englishName === "Uranus"){
                    setPlanetPic(Uranus)
                }
                else if(props.planet.englishName === "Mercury"){
                    setPlanetPic(Mercury)
                }
                else if(props.planet.englishName === "Neptune"){
                    setPlanetPic(Neptune)
                }
                else{
                    setPlanetPic(res.data.collection.items[6].links[0].href)
                }
            })
            .catch(err => console.log(err))
        }, [props.planet.englishName])
    
    return(
        <div className="planetCard mx-auto center"> 
            <div className="jumbotron mx-auto center">
                <h3 className="display-3 text-warning">Cool facts about {props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName}</h3>
                <hr className="my-2"></hr>
                <div className="d-flex">   
                    <img src={planetPic} alt={props.planet.englishName} className="planetPic mx-auto center"/>
                </div>
                <hr className="my-2"></hr>
                <p className="text-info">{props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName}'s Gravity: {props.planet.gravity}</p>
                <p className="text-info">{props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName}'s Average Temperature: {Math.round(props.planet.avgTemp - 273.15) * 9/5 + 32}° F</p>
                <p className="text-info">{props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName} has {props.planet.moons? props.planet.moons.length : 0} moon(s)!</p>
                    <p className="d-flex flex-row-reverse">
                        <a className="btn btn-outline-secondary text-warning btn-sml" href="#!" role="button">To extended infopage</a>
                    </p>
            </div>   
        </div>
    )
}

export default PlanetCard;