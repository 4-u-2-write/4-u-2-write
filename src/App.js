import './App.css';
import logo from './assets/bootcampDiariesOutlined.png';
import Prompts from './Prompts';
import IconSet from './IconSet';
import Timers from './Timer';
import { TimeForm } from './Timer';
import {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';


function App() {
const [selected, setSelected] = useState(0);
const [userEntryInput, setUserEntryInput] = useState('');

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSelected(value);
  }

  const handleEntryChange = (e) => {
    setUserEntryInput(e.target.value);
  }
  
  return (
    <Router>
      <div className="App wrapper">
        <nav>
          <div className="logoContainer">
            <img src={logo} alt="Bootcamp Diaries Logo"/>
          </div>
          <Route path="/" component={props => <IconSet userEntry={userEntryInput}/>} />
        </nav>
    
        <div className="divContainer">
          <div className="toolkitContainer">
            <Route exact path="/prompts/" component={Prompts} />
            <Route exact path="/timers/" component = {props => <TimeForm handleSubmit={handleSubmit} />} />
            <Route exact path="/timers/" component = {props => <Timers userChoice={selected} />} />
          </div>

          <div className="entryContainer">
            <form className="textBox">
              <textarea
                id="story" name="story"
                placeholder='"The scariest moment is always just before you start..."'
                rows="25" cols="75"
                onChange={handleEntryChange}
                value={userEntryInput}
              >
              </textarea>
            </form>
          </div>
        <footer>
          <Footer />
        </footer>
        </div>
      </div>
      
    </Router>
  );
}

export default App;