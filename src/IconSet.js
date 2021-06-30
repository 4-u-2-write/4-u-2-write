import { faClock, faEdit, faFile, faSave } from '@fortawesome/free-regular-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "./firebase";
import { Link } from 'react-router-dom';

const IconSet = (props) => {

  const toggleMode = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
  }

  const pushToFirebase = () => {
    const userEntry = props.userEntry;
    console.log(userEntry);
  if (userEntry !== "") {
      const dbRefEntries = firebase.database().ref('/Entries');
      dbRefEntries.push(userEntry);
    }
  }


  return (
    <div className="icons">
      <Link to={`/timers/`}>
        <FontAwesomeIcon className='clock fa-rotate-270' size='2x' icon={faClock} />
      </Link>
      <Link to={`/prompts/`}>
        <FontAwesomeIcon className='pen fa-rotate-270' size='2x' icon={faEdit} />
      </Link>
      <FontAwesomeIcon className='page fa-rotate-270' size='2x' icon={faFile} />
      <FontAwesomeIcon className='sun fa-rotate-270' size='2x' icon={faAdjust} onClick={toggleMode} />
      <FontAwesomeIcon className='save fa-rotate-270' size='2x' icon={faSave} onClick={pushToFirebase}/>
    </div>
  )
}

export default IconSet;