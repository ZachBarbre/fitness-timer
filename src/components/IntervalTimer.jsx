import React, { useState, useEffect, useRef, useCallback } from 'react';
import Timer from './Timer';


const IntervalTimer = ({ workoutData }) => {
    const { 
        roundMinutes, 
        roundSeconds, 
        totalRounds, 
        restMinutes, 
        restSeconds, 
        workoutType, 
        workout } = workoutData;

    let exercisesInTimer = []
    for (let i = 0; i < totalRounds / workout.length; i++ ){
        exercisesInTimer = exercisesInTimer.concat(workout);
    }

    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(roundSeconds)
    const [minutes, setMinutes] = useState(roundMinutes)
    const [round, setRound] = useState(1)
    const [resting, setResting] = useState(false);
    const timer = useRef(false)

    // const intervalClock = useCallback(() => {
    //     const time = seconds + minutes;

    //     if(resting) {
    //         if(time === 0){
    //             setMinutes(roundMinutes);
    //             setSeconds(roundSeconds);
    //             setRound(round + 1);
    //             setResting(false);
    //         } else {
    //             timer.current = setTimeout(() => {
    //                 if (seconds === 0){
    //                     setSeconds(59);
    //                     setMinutes(minutes - 1)
    //                 } else {
    //                     setSeconds(seconds - 1)
    //                 }
    //             }, 1000);
    //         }
    //     } else {
    //         if (time === 0 && round === totalRounds ){
    //             clearTimeout(timer.current);
    //             setIsRunning(false);
    //         }
    //         if (time === 0 && round !== totalRounds) {
    //             setMinutes(restMinutes);
    //             setSeconds(restSeconds);
    //             setResting(true);
    //         }
    //         if(isRunning){
    //             timer.current = setTimeout(() => {
    //                if (seconds === 0){
    //                    setSeconds(59);
    //                    setMinutes(minutes - 1)
    //                } else {
    //                    setSeconds(seconds - 1)
    //                }
    //            }, 1000);
    //        }
    //     }
    // }, [seconds, minutes, isRunning, round, totalRounds, resting, roundMinutes, roundSeconds, restMinutes, restSeconds])

    useEffect(() => {
        const time = seconds + minutes;

        if(resting) {
            if(time === 0){
                setMinutes(roundMinutes);
                setSeconds(roundSeconds);
                setRound(round + 1);
                setResting(false);
            } else {
                timer.current = setTimeout(() => {
                    if (seconds === 0){
                        setSeconds(59);
                        setMinutes(minutes - 1)
                    } else {
                        setSeconds(seconds - 1)
                    }
                }, 1000);
            }
        } else {
            if (time === 0 && round === totalRounds ){
                clearTimeout(timer.current);
                setIsRunning(false);
            }
            if (time === 0 && round !== totalRounds) {
                setMinutes(restMinutes);
                setSeconds(restSeconds);
                setResting(true);
            }
            if(isRunning){
                timer.current = setTimeout(() => {
                   if (seconds === 0){
                       setSeconds(59);
                       setMinutes(minutes - 1)
                   } else {
                       setSeconds(seconds - 1)
                   }
               }, 1000);
           }
        }
        return () => {
            clearTimeout(timer.current)
        }
    },[seconds, minutes, isRunning, round, totalRounds, resting, roundMinutes, roundSeconds, restMinutes, restSeconds]);

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
        setRound(1);
        setResting(false);
    }

    const timerProps = {
        minutes, 
        seconds, 
        workoutType, 
        resting, 
        exercisesInTimer, 
        round, 
        totalRounds, 
        isRunning, 
        handleRestart, 
        handleStart
    }

    return(
        <Timer {...timerProps}/>
    )
}

export default IntervalTimer;