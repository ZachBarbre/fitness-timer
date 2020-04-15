import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { TimerContainer, MainTime, Exercise, TimerDetails, Rounds, Controls } from './TimerStyles';
import { beep } from '../utils/oscPlay';


const RestOnInterval = ({ workoutData }) => {
    const { 
        intervalMinutes, 
        intervalSeconds, 
        totalRounds, 
        restMinutes, 
        restSeconds, 
        workout } = workoutData;

    const totalIntervals = workout.length;

    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(intervalSeconds)
    const [minutes, setMinutes] = useState(intervalMinutes)
    const [round, setRound] = useState(1)
    const [interval, setInterval] = useState(1)
    const [resting, setResting] = useState(false);
    const timer = useRef(false)

    const resetOnNewWorkout = useCallback(() =>{
        clearTimeout(timer.current)
        setIsRunning(false);
        setResting(false);
        setSeconds(intervalSeconds);
        setMinutes(intervalMinutes);
        setRound(1);
    }, [timer, intervalMinutes, intervalSeconds])
    
    useEffect(() => {
        resetOnNewWorkout()
    },[workoutData, resetOnNewWorkout]);

    useEffect(() => {
        const time = seconds + minutes;
        if(isRunning) {
            if(resting) {
                if(time === 0){
                    setMinutes(intervalMinutes);
                    setSeconds(intervalSeconds);
                    setInterval(interval + 1);
                    beep(10, 520, 200);
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
                if (time === 0 && round === totalRounds && interval === totalIntervals){
                    clearTimeout(timer.current);
                    beep(10, 220, 300);
                    setIsRunning(false);
                } else {
                    if (time === 0 && interval === totalIntervals) {
                        setMinutes(restMinutes);
                        setSeconds(restSeconds);
                        setRound(round + 1)
                        setInterval(0);
                        setResting(true);
                    }
                    if (time === 0 && interval !== totalIntervals) {
                        setMinutes(restMinutes);
                        setSeconds(restSeconds);
                        beep(10, 520, 200);
                        setResting(true);
                    }
                    else {
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
                }
        }
        return () => {
            clearTimeout(timer.current)
        }
    },[seconds, minutes, isRunning, round, 
        totalRounds, resting, intervalMinutes, 
        intervalSeconds, restMinutes, restSeconds,
        totalIntervals, interval]);

    const handleStart = () => {
        if (isRunning){
            setIsRunning(false);
            beep(10, 520, 200);
        } else {
            setIsRunning(true);
            beep(10, 520, 200);
        }
    }

    const handleRestart = () => {
        clearTimeout(timer.current)
        setIsRunning(false);
        setSeconds(intervalSeconds);
        setMinutes(intervalMinutes);
        setRound(1);
        setResting(false);
    }

    return(
        <TimerContainer resting={resting}>
            <MainTime>
                {minutes >= 10 ? minutes : '0' + minutes}:{seconds >= 10 ? seconds : '0' + seconds}
            </MainTime>
            <Exercise>
                <h2>{resting ? 'Rest' : workout[interval - 1]}</h2>
            </Exercise>
            <TimerDetails>
                <Controls onClick={handleRestart}>
                    <FontAwesomeIcon icon={faRedo} />
                </Controls>
                <Rounds>
                    <p>{`Interval: ${interval} of ${totalIntervals}`}</p>
                    <p>{`Rounds: ${round} of ${totalRounds}`}</p>
                </Rounds>
                <Controls onClick={handleStart}>
                    {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Controls>
            </TimerDetails>
        </TimerContainer>
    )
}

export default RestOnInterval;