import firebase from "./firebase";
import { useState, useEffect } from "react";

const Entry = () => {

  const [userEntryInput, setUserEntryInput] = useState('');

  const handleEntryChange = (e) => {
    setUserEntryInput(e.target.value);
    if (userEntryInput !== "") {
      
    }
  }
// if text box value stops changing ( aka user stops typing) for 15 seconds then show alert
  useEffect(() => {
    const timeoutId = setInterval(() => alert("Get back to work!"), 15000);
    return () => clearTimeout(timeoutId);
  }, [userEntryInput]);


  // when save button is clicked push user entry to firebase database
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