import { faClock, faEdit, faFile, faSave } from '@fortawesome/free-regular-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconSet = () => {

  const togglemode = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
  }


  return (
    <div className="icons">
      <FontAwesomeIcon className='clock fa-rotate-270' size='2x' icon={faClock} />
      <FontAwesomeIcon className='pen fa-rotate-270' size='2x' icon={faEdit} />
      <FontAwesomeIcon className='page fa-rotate-270' size='2x' icon={faFile} />
      <FontAwesomeIcon className='sun fa-rotate-270' size='2x' icon={faAdjust} onClick={togglemode} />
      <FontAwesomeIcon className='save fa-rotate-270' size='2x' icon={faSave} />
    </div>
  )
}

export default IconSet;