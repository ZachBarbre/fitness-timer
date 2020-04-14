import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { TimerContainer, MainTime, Exercise, TimerDetails, Rounds, Controls } from './TimerStyles';

const Timer = () => {
    const roundMinutes = 0;
    const roundSeconds = 5;
    const totalRounds = 2; 
    const restMinutes = 0;
    const restSeconds = 30;
    const workoutType = 'rounds';
    
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(roundSeconds)
    const [minutes, setMinutes] = useState(roundMinutes)
    const [round, setRound] = useState(1)
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

    const roundClock = useCallback(() => {
        const time = seconds + minutes;
        if (time === 0 && round === totalRounds ){
            clearTimeout(timer.current);
            setIsRunning(false);
        }
        if (time === 0 && round !== totalRounds) {
            setMinutes(roundMinutes);
            setSeconds(roundSeconds);
            setRound(round + 1);
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
    }, [seconds, minutes, isRunning, round, totalRounds])
    
    useEffect(() => {
        switch(workoutType){
            case 'runningClock':
                runningClock()
                break
            case 'rounds':
                roundClock()
                break
            default:
                console.log('something did not work');
        }
        return () => {
            clearTimeout(timer.current)
        }
    },[runningClock, roundClock]);

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
                <h2>Exercise</h2>
            </Exercise>
            <TimerDetails>
                <Controls onClick={handleRestart}>
                    <FontAwesomeIcon icon={faRedo} />
                </Controls>
                <Rounds>
                    <p>{totalRounds > 0 ? `Rounds: ${round} of ${totalRounds}` : 'Go until finished!'}</p>
                </Rounds>
                <Controls onClick={handleStart}>
                    {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Controls>
            </TimerDetails>
        </TimerContainer>
    )
}

export default Timer;