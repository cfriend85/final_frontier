import React, {useState} from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';

const Planet = (props) => {

    const [currentPlanet, setCurrentPlanet] = useState({})

    const onClickedHandler = (event) => {
        event.preventDefault();
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${props.item.id}`)
            .then(res => {
                setCurrentPlanet(res.data)
                props.onClickHandler(props.idx);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="pt-3 pb-3 p-4" onClick={onClickedHandler}>
            <button className="btn btn-outline-secondary text-info btn-lg pnet">{props.item.englishName === "Sun"? "The Sun" : props.item.englishName}</button>
            <hr></hr>
            {props.activePlanet === props.idx ? <PlanetCard planet={currentPlanet} /> : <p></p>}
        </div>
    )
}

export default Planet;