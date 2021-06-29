import './App.css';
import Prompts from './Prompts';
import Entry from './Entry';
import IconSet from './IconSet';
import Timers from './Timer';
import { TimeForm } from './Timer';
import {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Fifteen from './Fifteen';


function App() {
  const [selected, setSelected] = useState(0);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSelected(value);
  }

  return (
    <Router>
      <div className="App">

        <h1>Bootcamp Diaries</h1>

        <Route path="/" component={IconSet} />
        <Route exact path="/prompts/" component={Prompts} />
        <Route exact path="/timers/" component = {props => <Timers userChoice={selected} />} />
        <Route exact path="/timers/" component = {props => <TimeForm handleSubmit={handleSubmit} />} />
        <Route path="/" component={Entry} />
        
      </div>
    </Router>
  );
}

export default App;