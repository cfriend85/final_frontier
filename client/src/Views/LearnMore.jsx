import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router'
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
        <div className="lMore">
            <h1 className="text-warning p-3">More About {currentPlanet.englishName === "Sun"? "The Sun" : currentPlanet.englishName}</h1>
            <div >
                <h2 className="text-info p-3">Moons ({currentPlanet.moons? currentPlanet.moons.length : 0}):</h2>
                <div className="p-3 d-flex flex-wrap">
                {
                    moons?.map((item, i) => {
                        return <h5 key={i} className="allMoons">{i == moons.length-1? `${item.moon}` : `${item.moon}, `}</h5>
                    })
                }
                </div>
            </div>    
            
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Axial Tilt:</th>
                        <th>Density:</th>
                        <th>Yearly Orbit (in days) :</th>
                        <th>Plantary Rotation (in hours) :</th>
                        <th>Eccentricity (orbital variance):</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-warning text-secondary">
                        <th>{currentPlanet.axialTilt}</th>
                        <th>{currentPlanet.density}</th>
                        <th>{currentPlanet.sideralOrbit}</th>
                        <th>{currentPlanet.sideralRotation}</th>
                        <th>{currentPlanet.eccentricity}</th>
                    </tr>
                </tbody>
            </table>
            <div className="bInfoPage">
                <div className="m-3 d-flex hPandImgBtn">
                    <Link to="/" className="btn btn-danger m-3 ">Home Page</Link>
                    <button className="btn btn-warning m-3" onClick={onClickHandler} id="keepClicking">Image</button>
                </div>
                <hr></hr>
                {planetPic? <img className="imageSizing" src={planetPic} alt={currentPlanet.englishName}/> : <p></p>}
            </div>
        </div>
    )
}

export default LearnMore;