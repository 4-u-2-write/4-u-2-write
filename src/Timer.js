import { useState } from "react";
import { Timer } from "react-countdown-clock-timer";


const Timers = (props) => {
    const timerTest = parseInt(props.userChoice);

    return (
    <div className="timerCount">
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
    const [timeAmount, setTimeAmount] = useState("");

    const updateTime = (e) => {
        setTimeAmount(e.target.value);
    }

    return (
        <form className="timeForm" onSubmit = {(e) => props.handleSubmit(e, timeAmount)}>
					{/* <div className="dropdown"> */}
            <select required id="timeSelect" name="timeSelect"  value={timeAmount} onChange={updateTime}>
                <option value="" disabled>Select option</option>
                <option value="600">10 minutes</option>
                <option value="1200">20 minutes</option>
                <option value="1800">30 minutes</option>
                <option value="2400">40 minutes</option>
            </select>
					{/* </div> */}
					<button className="dropBtn" type="submit" name="submit" value="submit">Start Timer</button>
        </form>
    )
}

export default Timers;
export {TimeForm};