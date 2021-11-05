import React, { useState, useEffect } from "react";
import axios from 'axios';
import Planet from '../Components/Planet';


const ViewPlanet = (props) => {

    const [planet, setPlanet] = useState({})
    
    return(
        <div>
            <h1 className="head">Single Planet Page</h1>
            <h3 className="head">Put planet component here</h3>
        </div>
    )
}

export default ViewPlanet;