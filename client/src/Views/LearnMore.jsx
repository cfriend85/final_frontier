import React, {useState, useEffect} from 'react';
import axios from 'axios';

const LearnMore = (props) => {

    const [currentPlanet, setCurrentPlanet] = useState({});
    const [moons, setMoons] = useState([]);
    const [planetPic, setPlanetPic] = useState("")
    let [planetIndex, setPlanetIndex] = useState(98)

    useEffect(() => {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${props._id}`)
            .then(res => {
                setCurrentPlanet(res.data)
                setMoons(res.data.moons);
            })
            .catch(err => console.log(err))
    }, [props._id])

    const onClickHandler = (event) => {
        event.preventDefault();
        if (planetIndex == 98) {
            console.log(planetIndex)
            setPlanetIndex(-1)
        }
        else{
            setPlanetIndex(planetIndex += 1)
            console.log(planetIndex)
        }
        axios.get(`https://images-api.nasa.gov/search?q=${currentPlanet.englishName}`)
            .then(res => setPlanetPic(res.data.collection.items[planetIndex].links[0].href))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Learn More page</h1>
            <h1>{currentPlanet.englishName}</h1>
            {
                moons?.map((item, i) => {
                    return <p key={i}>{item.moon}</p>
                })
            }
            <h3>Axial Tilt: {currentPlanet.axialTilt}</h3>
            <h3>Density: {currentPlanet.density}</h3>
            <h3>Sideral Orbit: {currentPlanet.sideralOrbit}</h3>
            <h3>Sideral Rotation: {currentPlanet.sideralRotation}</h3>
            <h3>Eccentricity: {currentPlanet.eccentricity}</h3>
            <button className="btn btn-warning" onClick={onClickHandler}>Map Images</button>
            {planetPic? <img src={planetPic} alt={currentPlanet.englishName}/> : <p></p>}
        </div>
    )
}

export default LearnMore;