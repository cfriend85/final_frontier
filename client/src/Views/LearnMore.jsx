import React, {useState, useEffect} from 'react';
import axios from 'axios';

const LearnMore = (props) => {

    const [currentPlanet, setCurrentPlanet] = useState({});
    const [moons, setMoons] = useState([]);
    const [planetPics, setPlanetPics] = useState([])

    useEffect(() => {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${props._id}`)
            .then(res => {
                setCurrentPlanet(res.data)
                setMoons(res.data.moons);
            })
            .catch(err => console.log(err))
    }, [props._id])

    return(
        <div>
            <h1>Learn More page</h1>
            <h1>{currentPlanet.englishName}</h1>
            {
                moons?.map((item, i) => {
                    return <p key={i}>{item.moon}</p>
                })
            }
        </div>
    )
}

export default LearnMore;