import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Planet from '../Components/Planet';


const Main = (props) => {

    const [bodies, setBodies] = useState([]);

    useEffect(() => {
        axios.get("https://api.le-systeme-solaire.net/rest.php/bodies?filter%5B%5D=id%2Ceq%2Cterre&filter%5B%5D=id%2Ceq%2Curanus&filter%5B%5D=id%2Ceq%2Cpluton&filter%5B%5D=id%2Ceq%2Cneptune&filter%5B%5D=id%2Ceq%2Cjupiter&filter%5B%5D=id%2Ceq%2Cmars&filter%5B%5D=id%2Ceq%2Cmercure&filter%5B%5D=id%2Ceq%2Cvenus&filter%5B%5D=id%2Ceq%2Csaturne&filter%5B%5D=id%2Ceq%2Csoleil&satisfy=any/")
            .then(res => setBodies(res.data.bodies))
            .catch(err => console.log(err))
    }, [bodies])

    return(
        <div>
            {
                bodies.map((item, i) => {
                    return <Planet item={item} key={i} />
                })
            }
        </div>
    )
}

export default Main;