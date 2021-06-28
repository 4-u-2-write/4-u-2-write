
import Prompts from './Prompts';
import Entry from './Entry';
import IconSet from './IconSet';
import Timers from './Timer';
import { TimeForm } from './Timer';
import './App.css';
import {useState} from 'react';
// import Fifteen from './Fifteen';




function App() {
const [selected, setSelected] = useState(0);
const [typing, setTyping] = useState('');
const handleSubmit = (e, value) => {
  e.preventDefault();
  setSelected(value);
}


  return (
    <div className="App">

      <h1>Bootcamp Diaries</h1>

      <div> 
        <Prompts />
        
      </div>

      <div>
        <IconSet />
      </div>
      
      <div>
        <Entry />
      </div>

      

  

</div>  
      <Timers userChoice={selected}/>
      < TimeForm handleSubmit={handleSubmit}/>
     
    </div>

  );

}

export default App;
