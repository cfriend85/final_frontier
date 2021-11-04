import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Views/Main';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
    <Router>
      <Main path='/' />
    </Router>
    </div>
  );
}

export default App;
