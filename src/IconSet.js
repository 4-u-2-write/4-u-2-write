import { faClock, faEdit, faFile, faSave } from '@fortawesome/free-regular-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const IconSet = () => {

  const toggleMode = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
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
      <FontAwesomeIcon className='save fa-rotate-270' size='2x' icon={faSave} />
    </div>
  )
}

export default IconSet;