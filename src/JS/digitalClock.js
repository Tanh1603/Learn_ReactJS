import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect( () => {
        const interValId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interValId);
    }, [time])
    const formatTime = () => {
        const meridiem = time.getHours() >= 12 ? "PM" : "AM";
        return `${padZero(time.getHours())}:${padZero(time.getMinutes())}:${padZero(time.getSeconds())} ${meridiem}`;
    }
    const padZero = num => {
        return (num < 10 ? "0": "") + num;
    }
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}
export default DigitalClock