import { faClock, faEdit, faFile, faSave } from '@fortawesome/free-regular-svg-icons';
import { faAdjust} from '@fortawesome/free-solid-svg-icons';
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
    <div>
      <label htmlFor="toggleMenu">✍️ Toolkit</label>
      <input type="checkbox" id="toggleMenu" name="toggleMenu" />
      <div className="icons slidingIcons">
        <Link to={`/`}>
          <FontAwesomeIcon className='page fa-rotate-270' size='2x' icon={faFile} title='Hide Toolbar' />
        </Link>
        <Link to={`/timers/`}>
          <FontAwesomeIcon className='clock fa-rotate-270' size='2x' icon={faClock} title='Timer Toolbar' />
        </Link>
        <Link to={`/prompts/`}>
          <FontAwesomeIcon className='edit fa-rotate-270' size='2x' icon={faEdit} title='Prompt Toolbar' />
        </Link>
        <Link>
          <FontAwesomeIcon className='adjust fa-rotate-270' size='2x' icon={faAdjust} onClick={toggleMode} title='Light/Dark Mode'/>
        </Link>
        <Link>
          <FontAwesomeIcon className='save fa-rotate-270' size='2x' icon={faSave} onClick={pushToFirebase} title='Save Entry'/>
        </Link>
      </div>
    </div>
  )
}

export default IconSet;