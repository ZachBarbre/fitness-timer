import React, { useState, useRef, useCallback, useEffect }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { TimerContainer, MainTime, Exercise, TimerDetails, Rounds, Controls } from './TimerStyles';

const RunningTimer = ({ workoutData }) => {
    const { roundMinutes, roundSeconds } = workoutData;

    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(roundSeconds)
    const [minutes, setMinutes] = useState(roundMinutes)
    const timer = useRef(false);

    const resetOnNewWorkout = useCallback(() =>{
        clearTimeout(timer.current)
        setIsRunning(false);
        setSeconds(roundSeconds);
        setMinutes(roundMinutes);
    }, [timer, roundMinutes, roundSeconds])
    
    useEffect(() => {
        resetOnNewWorkout()
    },[workoutData, resetOnNewWorkout]);

    useEffect(() => {
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
        return () => {
            clearTimeout(timer.current)
        }
    },[seconds, minutes, isRunning]);

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

    return(
        <TimerContainer>
            <MainTime>
                {minutes >= 10 ? minutes : '0' + minutes}:{seconds >= 10 ? seconds : '0' + seconds}
            </MainTime>
            <Exercise>
                <h2>'WORK!'</h2>
            </Exercise>
            <TimerDetails>
                <Controls onClick={handleRestart}>
                    <FontAwesomeIcon icon={faRedo} />
                </Controls>
                <Rounds>
                    <p>'Go until finished!'</p>
                </Rounds>
                <Controls onClick={handleStart}>
                    {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Controls>
            </TimerDetails>
        </TimerContainer>
    )
}

export default RunningTimer;