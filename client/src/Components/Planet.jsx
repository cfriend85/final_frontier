import React from 'react';
import axios from 'axios';
const Planet = (props) => {

    const onClickedHandler = (event) => {
        event.preventDefault();
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${props.item.id}`)
            .then(res => {
                props.onClickHandler(props.idx);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="pt-3 pb-3 p-4 mx-auto center" onClick={onClickedHandler}>
            <button className="btn btn-outline-secondary text-info btn-lg pnet">{props.item.englishName === "Sun"? "The Sun" : props.item.englishName}</button>
            <hr></hr>
        </div>
    )
}

export default Planet;