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
  const [title, setTitle] = useState("")
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=FlQBmLo1DxKWl57BFKDw5KNCsvighqJTgBWfeKJR`)
      .then(res => {
        setAstroPic(res.data.url)
        setTitle(res.data.title)
      })
      .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <header className="mainAppHeader" style={{backgroundImage: `url(${Space})`}}>
        <h1 id="title">The Final Frontier</h1>
      </header>
      <hr></hr>
      <Router>
        <Main path='/' astroPic={astroPic} title={title}/>
        <LearnMore path='/view/:_id' />
      </Router>
    </div>
  );
}

export default App;
