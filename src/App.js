
import Prompts from './Prompts';
import Entry from './Entry';
import IconSet from './IconSet';
import Timer from './Timer';
import { TimeForm } from './Timer';
import './App.css';


function App() {
  

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

  );

}

export default App;
