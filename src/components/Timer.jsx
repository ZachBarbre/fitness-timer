import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { TimerContainer, MainTime, Exercise, TimerDetails, Rounds, Controls } from './TimerStyles';

const Timer = ({ workoutData }) => {
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
    const timer = useRef(false);

    // This is if the working uses a running clock. Only goes up. 
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

    // This is if there are rounds with rest between the rounds. It runs down. 
    // possibly come back and refactor with switch statements 
    const intervalClock = useCallback(() => {
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
    }, [seconds, minutes, isRunning, round, totalRounds, resting, roundMinutes, roundSeconds, restMinutes, restSeconds])
    
    const resetOnNewWorkout = useCallback(() =>{
        clearTimeout(timer.current)
        setIsRunning(false);
        setResting(false);
        setSeconds(roundSeconds);
        setMinutes(roundMinutes);
        setRound(1);
    }, [timer, roundMinutes, roundSeconds])
    
    useEffect(() => {
        resetOnNewWorkout()
    },[workoutData, resetOnNewWorkout]);

    useEffect(() => {
        switch(workoutType){
            case 'running':
                runningClock()
                break
            case 'interval':
                intervalClock()
                break
            default:
                console.log('something did not work');
        }
        return () => {
            clearTimeout(timer.current)
        }
    },[runningClock, intervalClock, workoutType]);

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

    return(
        <TimerContainer>
            <MainTime>
                {minutes >= 10 ? minutes : '0' + minutes}:{seconds >= 10 ? seconds : '0' + seconds}
            </MainTime>
            <Exercise>
                <h2>{workoutType !== 'running' ? resting ? 'Rest' : exercisesInTimer[round - 1] : 'WORK!'}</h2>
            </Exercise>
            <TimerDetails>
                <Controls onClick={handleRestart}>
                    <FontAwesomeIcon icon={faRedo} />
                </Controls>
                <Rounds>
                    <p>{workoutType !== 'running' ? `Rounds: ${round} of ${totalRounds}` : 'Go until finished!'}</p>
                </Rounds>
                <Controls onClick={handleStart}>
                    {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Controls>
            </TimerDetails>
        </TimerContainer>
    )
}

export default Timer;