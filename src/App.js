
import Timer from './Timer';
import { TimeForm } from './Timer';
import './App.css';
import { faClock, faFile, faSave, faStar, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';
import { useEffect, useState } from 'react';



function App() {
  const [prompts, setPrompts] = useState([]);
  const [userPromptInput, setUserPromptInput] = useState('');
  const [displayPrompt, setDisplayPrompt] = useState('');
  // const [entries, setEntries] = useState('');
  const [userEntryInput, setUserEntryInput] = useState('');

  // event listener functions 
  // 1. user typing in text input
  const handlePromptChange = (e) => {
    setUserPromptInput(e.target.value);
  }
  
  // 2. click on button
  const handlePromptClick = (e) => {
    e.preventDefault();
  // Check for empty input before adding to database
    if (userPromptInput !== "") {
      const dbRefPrompts = firebase.database().ref('/Prompts');
      dbRefPrompts.push(userPromptInput);
    }
    setUserPromptInput('');
  }


  const handleEntryChange = (e) => {
    setUserEntryInput(e.target.value);
  }
  // Click on user entry
  const handleEntryClick = (e) => {
    e.preventDefault();
    if(userEntryInput !== "") {
      const dbRefEntries = firebase.database().ref('/Entries');
      dbRefEntries.push(userEntryInput);
    }
    setUserEntryInput('');
  }



  useEffect(() => {
    // ref to firebase with nested prompts data
    const dbRefPrompts = firebase.database().ref('/Prompts');
    const dbRefEntries = firebase.database().ref('/Entries');

    dbRefPrompts.on('value', (response) => {
      // console.log(response.val());
      const newState = [];

      const promptData = response.val();

      for (let key in promptData) {
        newState.push(promptData[key]);
      }
      setPrompts(newState);
      // console.log(newState);
    
    });

    
  }, [])
  
  const randomizer = () => {
    // variable with random index number, based on array length
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setDisplayPrompt(prompts[randomIndex]);
    return displayPrompt;
    }

  return (
    <div className="App">

      <h1>Bootcamp Diaries</h1>


      <form>
        <label htmlFor="newPrompt">
          <FontAwesomeIcon className='star' icon ={faStar} />
            <input 
              type="text" 
              id="newPrompt"
              placeholder="Submit a writing prompt for the community!" 
              onChange={handlePromptChange}
              value={userPromptInput}
            />
          </label>
        <button type="submit" onClick={handlePromptClick}>Add a writing prompt</button>
        </form>
        <button type="submit" onClick={randomizer}>Ask for a prompt</button>
        <p> 
          {displayPrompt}
        </p>

  <div className="icons">
    <FontAwesomeIcon className='clock' size='2x' icon ={faClock} />

  
    <FontAwesomeIcon className='pen' size='2x' icon ={faPen} />

    <FontAwesomeIcon className='page' size='2x' icon ={faFile} />

    <FontAwesomeIcon className='sun' size='2x' icon ={faSun} />

    <FontAwesomeIcon className='save' size='2x' icon ={faSave} />

  
  </div>



      <form className="text-box">
        <textarea 
        id="story" name="story"
        placeholder="Start writing here...." 
        rows="25" cols="75"
        onChange={handleEntryChange}
        value={userEntryInput}
        >
        </textarea>
        <button type="submit" onClick={handleEntryClick}>Save Entry</button>
      </form>    


    </div>
  );
}

export default App;