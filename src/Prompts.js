import {useState, useEffect} from 'react';
import firebase from './firebase';
const Prompts = () => {
  const [displayPrompt, setDisplayPrompt] = useState([]);
  const [userPrompt, setUserPrompt] = useState('');


  useEffect(() => {
    // database references
    const dbRefPrompts = firebase.database().ref('/Prompts');
    
    
    //pulls object: book1, book2, etc from firebase
    dbRefPrompts.on('value', (response) => {
      // new var to hold the new state
      const newState = [];
      // store the response from firebase to promptData
      // and use .val() to get the info for us
      const promptData = response.val();
      // iterate through promptData to get each title
      for(let key in promptData) {
        // push each title to userPrompt array
        newState.push({key: key, name: promptData[key]});
        // use setUserPrompt to update our state
      }      
      setUserPrompt(newState);
      console.log(newState);
      
    })

  })
  return (
    <section>
      Promptsmap()
      <p>Here's our data: </p>
    </section>
  )
}

export default Prompts;