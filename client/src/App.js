import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Views/Main';
import ViewPlanet from './Views/ViewPlanet';
import {Router} from '@reach/router';
import {useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [astroPic, setAstroPic] = useState("")

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=FlQBmLo1DxKWl57BFKDw5KNCsvighqJTgBWfeKJR`)
      .then(res => setAstroPic(res.data.url))
      .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <header className="main-header" style={{backgroundImage: `url(${astroPic})`}}>
        <h1>The Final Frontier</h1>
      </header>
      <hr></hr>
    <Router>
      <Main path='/' />
      <ViewPlanet path="/:_id" />
    </Router>
    </div>
  );
}

export default App;
