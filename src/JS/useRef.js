import { useRef, useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();
    useEffect(() => {
        prevCount.current = count;
    }, [count])

    const handleStart = () => {
        timerId.current =  setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(timerId.current);
    }
    console.log("Truoc: ", prevCount,"Sau: ", count);
    
    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Example;