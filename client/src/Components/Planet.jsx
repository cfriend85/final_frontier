import React from 'react';
import { navigate } from '@reach/router';

const Planet = (props) => {
    return (
        <div className="d-flex justify-content-around flex-wrap p-3" onClick={() => navigate(`/${props.item.id}`)}>
            <h1 className>{props.item.englishName}</h1>
        </div>
    )
}

export default Planet;