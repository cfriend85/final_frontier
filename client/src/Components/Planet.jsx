import React from 'react';


const Planet = (props) => {
    return (
        <div className="d-flex justify-content-around flex-wrap p-3">
            <h1 className>{props.item.englishName}</h1>
        </div>
    )
}

export default Planet;