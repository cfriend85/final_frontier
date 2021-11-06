import React, {useState} from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';

const Planet = (props) => {

    const [currentPlanet, setCurrentPlanet] = useState({})

    const onClickHandler = (event) => {
        event.preventDefault();
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${props.item.id}`)
            .then(res => setCurrentPlanet(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex pt-3 pb-3 p-5" onClick={onClickHandler}>
            <button className="btn btn-outline-secondary text-info btn-lg pnet">{props.item.englishName == "Sun"? "The Sun" : props.item.englishName}</button>
            <h1 className="text-light">{currentPlanet.englishName}</h1>
            {/* <PlanetCard planet={currentPlanet} /> */}
        </div>
    )
}

export default Planet;