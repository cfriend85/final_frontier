import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Planet = (props) => {
    return (
        <div className="d-flex pt-3 pb-3 p-5" onClick={() => navigate(`/${props.item.id}`)}>
            <button className="btn btn-outline-secondary text-info btn-lg pnet">{props.item.englishName == "Sun"? "The Sun" : props.item.englishName}</button>
        </div>
    )
}

export default Planet;