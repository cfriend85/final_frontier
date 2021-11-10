import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Space from './Images/space.gif'
import Main from './Views/Main';
import LearnMore from './Views/LearnMore';

import {Router} from '@reach/router';
import {useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [astroPic, setAstroPic] = useState("")

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=FlQBmLo1DxKWl57BFKDw5KNCsvighqJTgBWfeKJR&date=2021-05-15`)
      .then(res => setAstroPic(res.data.url))
      .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <header className="main-header" style={{backgroundImage: `url(${Space})`}}>
        <h1 id="title">The Final Frontier</h1>
      </header>
      <hr></hr>
    <Router>
      <Main path='/' astroPic={astroPic}/>
      <LearnMore path='/view/:_id' />
    </Router>
    </div>
  );
}

export default App;
