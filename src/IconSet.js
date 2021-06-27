import { faClock, faEdit, faFile, faSave } from '@fortawesome/free-regular-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconSet = () => {
  return (
    <div className="icons">
      <FontAwesomeIcon className='clock' size='2x' icon={faClock} />
      <FontAwesomeIcon className='pen' size='2x' icon={faEdit} />
      <FontAwesomeIcon className='page' size='2x' icon={faFile} />
      <FontAwesomeIcon className='sun' size='2x' icon={faAdjust} />
      <FontAwesomeIcon className='save' size='2x' icon={faSave} />
    </div>
  )
}

export default IconSet;