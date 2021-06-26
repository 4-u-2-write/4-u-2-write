import './App.css';
import { faClock, faFile, faStar, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="App">

      <h1>Bootcamp Diaries</h1>

<form>
  <label>
    <FontAwesomeIcon className='star' icon ={faStar} />
      <input type="text" placeholder="Tell me about your day" />
    </label>
  </form>


  <div className="icons">
    <FontAwesomeIcon className='clock' icon ={faClock} />
   
    <FontAwesomeIcon className='pen' icon ={faPen}
   />

   <FontAwesomeIcon className='page' icon ={faFile}
   />

   <FontAwesomeIcon className='sun' icon ={faSun}
   />
   
  </div>




<div className="text-box">
  <textarea id="story" name="story"placeholder="Start writing here...."
          rows="25" cols="75">
              
  </textarea>
</div>    



      
    </div>
  );
}

export default App;
