import './App.css';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">

      <h1>Bootcamp Diaries</h1>

<form>
  <label>
    <FontAwesomeIcon className='star' icon={faStar} />
      <input type="text" placeholder="Tell me about your day" />
    </label>
  </form>


<div className="text-box">
  <textarea id="story" name="story"placeholder="Start writing here...."
          rows="25" cols="75">
  </textarea>
</div>    





      
    </div>
  );
}

export default App;
