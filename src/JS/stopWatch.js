import { useState, useRef, useEffect } from "react";

function StopWatch() {

    const [isStart, setIsStart] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const intervalId = useRef(null);
    const startTime = useRef(0);

    useEffect( () => {
        if(isStart){
            intervalId.current = setInterval(() => {
                setElapsed( Date.now() - startTime.current)
            }, 10)
        }
        return () => clearInterval(intervalId.current)
    }, [isStart])

    const handleStart = () => {
        setIsStart(true);   
        startTime.current = Date.now() - elapsed;
    }
    const handleStop = () => {
        setIsStart(false);
    }
    const handleReset= () => {
        setIsStart(false);
        setElapsed(0);
    }

    const formatStopWatch = () => {
        // let hours = Math.floor(elapsed / (1000 * 60 * 60)); 
        let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsed % (1000 * 60)) / 1000); 
        let milliseconds = Math.floor(elapsed % 1000 / 10); 

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }
    return (
        <div className="stopwatch">
            <div className="display">{formatStopWatch()}</div>
            <div className="controls">
                <button onClick={handleStart} className="start-button">Start</button>
                <button onClick={handleStop} className="stop-button">Stop</button>
                <button onClick={handleReset} className="reset-button">Reset</button>
            </div>
        </div>
    )
}

export default StopWatch