
import Timer from './Timer';
import { TimeForm } from './Timer';

import './App.css';
import { faClock, faFile, faStar, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';
import { useEffect, useState } from 'react';




function App() {
  const [prompts, setPrompts] = useState([]);
  const [userPromptInput, setUserPromptInput] = useState('');

  // event listener functions 
  // 1. user typing in text input
  const handlePromptChange = (e) => {
    setUserPromptInput(e.target.value);
  }
  
  // 2. click on button
  const handlePromptClick = (e) => {
    e.preventDefault();

    const dbRefPrompts = firebase.database().ref('/Prompts');

    dbRefPrompts.push(userPromptInput);

    setUserPromptInput('');
  }



  useEffect(() => {
    // ref to firebase with nested prompts data
    const dbRefPrompts = firebase.database().ref('/Prompts');

    dbRefPrompts.on('value', (response) => {
      // console.log(response.val());
      const newState = [];

      const promptData = response.val();

      for (let key in promptData) {
        newState.push(promptData[key]);
      }
      setPrompts(newState);
      // console.log(newState);
      const randomizer = (newState) => {
    
    
      const randomIndex = Math.floor(Math.random() * newState.length);
      console.log(randomIndex);
            // e.preventDefault();
    
        }
      
    });

  }, [])


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

        {/* <button
        onClick={() => {
          newState.Math.floor(Math.random() * newState.length);
        }}
      >
        Generate random number!
      </button> */}

        <ul>
          {prompts.map((prompt) => {
            return (
              <li>
                <p>{prompt}</p>
              </li>
            )
          })}
        </ul>


      <div className="text-box">
        <textarea id="story" name="story"placeholder="Start writing here...." rows="25" cols="75">
        </textarea>
      </div>    


    </div>
  );
}

export default App;
