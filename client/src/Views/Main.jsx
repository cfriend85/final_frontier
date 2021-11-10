import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Planet from '../Components/Planet';
import PlanetCard from '../Components/PlanetCard';

const Main = (props) => {

    const [bodies, setBodies] = useState([]);
    const [clickedPlanet, setClickedPlanet] = useState(-1);
    
    useEffect(() => {
        axios.get("https://api.le-systeme-solaire.net/rest.php/bodies?filter%5B%5D=id%2Ceq%2Curanus&filter%5B%5D=id%2Ceq%2Cneptune&filter%5B%5D=id%2Ceq%2Cmars&filter%5B%5D=id%2Ceq%2Cterre&filter%5B%5D=id%2Ceq%2Csoleil&filter%5B%5D=id%2Ceq%2Cmercure&filter%5B%5D=id%2Ceq%2Cvenus&filter%5B%5D=id%2Ceq%2Cpluton&filter%5B%5D=id%2Ceq%2Cjupiter&filter%5B%5D=id%2Ceq%2Csaturne&satisfy=any/")
            .then(res => {
                setBodies([
                    res.data.bodies[6],
                    res.data.bodies[2],
                    res.data.bodies[9],
                    res.data.bodies[7],
                    res.data.bodies[1],
                    res.data.bodies[0],
                    res.data.bodies[5],
                    res.data.bodies[8],
                    res.data.bodies[3],
                    res.data.bodies[4],
                ])
            })
            .catch(err => console.log(err))
    }, [bodies])

    const onClickHandler = key => {
        setClickedPlanet(key);
    }

    return(
        <div>{/*this needs to be centered */}
            <div className="pnetDiv">
            {
                bodies.map((item, i) => {
                    return <Planet item={item} key={i} idx={i} activePlanet={clickedPlanet} onClickHandler={onClickHandler}/>
                })
            }
            </div>
            <div>
                {clickedPlanet >= 0? <PlanetCard planet={bodies[clickedPlanet]} /> : <p></p>}
            </div>
            <div className="space-POD d-flex">
            <img src={props.astroPic}  className="mx-auto center"alt="NASA Astronomy pic of the day"></img>
            </div>
        </div>
    )
}
export default Main;

