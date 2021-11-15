import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "@reach/router";
import Sun from '../Images/Sun.gif';
import Mercury from '../Images/Mercury.gif';
import Venus from '../Images/Venus.gif';
import Earth from '../Images/Earth.gif';
import Mars from '../Images/Mars.gif';
import Jupiter from '../Images/Jupiter.gif'
import Saturn from '../Images/Saturn.gif'
import Uranus from '../Images/Uranus.gif'
import Neptune from '../Images/Neptune.gif'
import Pluto from '../Images/Pluto.gif'

const PlanetCard = (props) => {

    const [planetPic, setPlanetPic] = useState("");
    const [planet, setPlanet] = useState({});

    useEffect(() => {
            axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${props.planet.id}`)
                .then(res => {
                    setPlanet(res.data)
                    if(props.planet.englishName === "Sun"){
                        setPlanetPic(Sun)
                    }
                    else if(props.planet.englishName === "Mercury"){
                        setPlanetPic(Mercury)
                    }
                    else if(props.planet.englishName === "Venus"){
                        setPlanetPic(Venus)
                    }
                    else if(props.planet.englishName === "Earth"){
                        setPlanetPic(Earth)
                    }
                    else if (props.planet.englishName === "Mars") {
                        setPlanetPic(Mars)
                    }
                    else if (props.planet.englishName === "Jupiter") {
                        setPlanetPic(Jupiter)
                    }
                    else if(props.planet.englishName === "Saturn"){
                        setPlanetPic(Saturn)
                    }
                    else if(props.planet.englishName === "Uranus"){
                        setPlanetPic(Uranus)
                    }
                    else if(props.planet.englishName === "Neptune"){
                        setPlanetPic(Neptune)
                    }
                    else{
                        setPlanetPic(Pluto)
                    }
                })
                .catch(err => console.log(err))
            }, [props.planet.englishName])
    
    return(
        <div className="planetCard mx-auto center"> 
            <div className="jumbotron mx-auto center">
                <h3 className="display-3 text-warning">{props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName}'s Astrological Data</h3>
                <hr className="my-2"></hr>
                <div className="d-flex">   
                    <img src={planetPic} alt={props.planet.englishName} className="planetPic mx-auto center"/>
                </div>
                <hr className="my-2"></hr>
                <p className="text-info">{props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName}'s Gravity: {props.planet.gravity}</p>
                <p className="text-info">{props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName}'s Average Temperature: {Math.round((planet.avgTemp - 273.15) * 9/5 + 32)}° F</p>
                <p className="text-info">{props.planet.englishName === "Sun"? "The Sun" : props.planet.englishName} has {props.planet.moons? props.planet.moons.length : 0} moon(s)!</p>
                    <p className="d-flex flex-row-reverse">
                        <Link className="btn btn-outline-secondary text-warning btn-sml" to={`/view/${planet.id}`}>Learn More</Link>
                    </p>
            </div>   
        </div>
    )
}

export default PlanetCard;