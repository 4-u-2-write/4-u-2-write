import firebase from "./firebase";
import { useState } from "react";
import Timers from "./Timer";

const Entry = (props) => {

  const [userEntryInput, setUserEntryInput] = useState('');

  const handleEntryChange = (e) => {
    setUserEntryInput(e.target.value);
    if (userEntryInput !== "") {
      
    }
  }
  // Click on user entry
  const handleEntryClick = (e) => {
    e.preventDefault();
    if (userEntryInput !== "") {
      const dbRefEntries = firebase.database().ref('/Entries');
      dbRefEntries.push(userEntryInput);
    }
    setUserEntryInput('');
  }

  return (
    <>
      <form className="text-box">
        <textarea
          id="story" name="story"
          placeholder="Start writing here...."
          rows="25" cols="75"
          onChange={handleEntryChange}
          value={userEntryInput}

        >
        </textarea>
        <button type="submit" onClick={handleEntryClick} >Save Entry</button>
      </form>
    </>
  )
}

export default Entry;