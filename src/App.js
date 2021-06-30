import './App.css';
import logo from './assets/bootcampDiariesOutlined.png';
import Prompts from './Prompts';
import IconSet from './IconSet';
import Timers from './Timer';
import { TimeForm } from './Timer';
import {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
const [selected, setSelected] = useState(0);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSelected(value);
  }

  const [userEntryInput, setUserEntryInput] = useState('');

  const handleEntryChange = (e) => {
    setUserEntryInput(e.target.value);

    
  }
  console.log(userEntryInput);
  
  return (
    <Router>
      <div className="App wrapper">
        <nav>
          <div class="logoContainer">
            <img src={logo} alt="Bootcamp Diaries Logo"/>
          </div>
          <Route path="/" component={props => <IconSet userEntry={userEntryInput}/>} />
        </nav>
    
        <Route exact path="/prompts/" component={Prompts} />
        <Route exact path="/timers/" component = {props => <Timers userChoice={selected} />} />
        <Route exact path="/timers/" component = {props => <TimeForm handleSubmit={handleSubmit} />} />

      
        <form className="text-box">
          <textarea
            id="story" name="story"
            placeholder="Start writing here...."
            rows="25" cols="75"
            onChange={handleEntryChange}
            value={userEntryInput}
          >
          </textarea>
        </form>
        
      </div>
    </Router>
  );
}

export default App;