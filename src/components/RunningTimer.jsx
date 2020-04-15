import React, { useState, useRef, useCallback, useEffect }from 'react';
import Timer from './Timer';

const RunningTimer = ({ workoutData }) => {
    const { 
        roundMinutes, 
        roundSeconds,
        workoutType } = workoutData;

    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(roundSeconds)
    const [minutes, setMinutes] = useState(roundMinutes)
    const timer = useRef(false);

    const runningClock = useCallback(() => {
        if(isRunning){
            timer.current = setTimeout(() => {
               if (seconds === 59){
                   setSeconds(0);
                   setMinutes(minutes + 1)
               } else {
                   setSeconds(seconds + 1)
               }
           }, 1000);
       }
    }, [seconds, minutes, isRunning])

    useEffect(() => {
        runningClock();
        return () => {
            clearTimeout(timer.current)
        }
    },[runningClock]);

    const handleStart = () => {
        if (isRunning){
            setIsRunning(false);
        } else {
            setIsRunning(true);
        }
    }

    const handleRestart = () => {
        clearTimeout(timer.current)
        setIsRunning(false);
        setSeconds(roundSeconds);
        setMinutes(roundMinutes);
    }

    const timerProps = {
        minutes, 
        seconds, 
        workoutType, 
        isRunning, 
        handleRestart, 
        handleStart
    }

    return(
        <Timer {...timerProps}/>
    )
}

export default RunningTimer;