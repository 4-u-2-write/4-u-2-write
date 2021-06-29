import { useState, useEffect } from "react";
import { Timer } from 'react-countdown-clock-timer';


const Timers = (props) => {
    const timerTest = parseInt(props.userChoice);

    return (
    <div className='timer-container'>
      <Timer
      durationInSeconds={timerTest}
      formatted={true}
      isPaused={false}
      showPauseButton={false}
      showResetButton={false}/>
    </div>
    )
}



const TimeForm = (props) => {
    const [timeAmount, setTimeAmount] = useState(0);

    const updateTime = (e) => {
        setTimeAmount(e.target.value);
    }

    const [value, setValue] = useState("");

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => alert("Get back to work!"), 3000);
        return () => clearTimeout(timeoutId);
    }, [value]);
    
        

    

    return (
        <form onSubmit = {(e) => props.handleSubmit(e, timeAmount)}>
            <select required id="timeSelect" name="timeSelect"  value={timeAmount} onChange={updateTime}>
                <option value="" disabled>Select option</option>
                <option value="900">15 minutes</option>
                <option value="1800">30 minutes</option>
                <option value="2700">45 minutes</option>
                <option value="3600">1 hour</option>
            </select>
            <button type="submit" name="submit" value="submit">Start Timer</button>
        </form>
    )
}

export default Timers;
export {TimeForm};