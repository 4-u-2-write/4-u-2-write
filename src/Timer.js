import { useState, useEffect } from "react";


const Timer = () => {
    const [count, setCount] = useState(60);
    // setCount(timeAmount);
    useEffect(() => {
        const timer = count > 0 && setTimeout(() => {
            setCount(count - 1)
        }, 1000);
    }, [count])

    return (
        <p>{count}</p>
    )
}

const handleSubmit = (e) => {
    e.preventDefault();
}


const TimeForm = () => {
    const [timeAmount, setTimeAmount] = useState(0);

    const updateTime = (e) => {
        setTimeAmount(e.target.value);
    }
    return (
        <form onSubmit = {handleSubmit}>
            <select required id="timeSelect" name="timeSelect"  value={timeAmount} onChange={updateTime}>
                <option value="" disabled>Select option</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
            </select>
            <button type="submit" name="submit" value="submit">Start Timer</button>
        </form>
    )
}

export default Timer;
export {TimeForm};