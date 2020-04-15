import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { TimerContainer, MainTime, Exercise, TimerDetails, Rounds, Controls } from './TimerStyles';


const IntervalTimer = ({ workoutData }) => {
    const { 
        roundMinutes, 
        roundSeconds, 
        totalRounds, 
        restMinutes, 
        restSeconds, 
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
        const time = seconds + minutes;
        if(isRunning) {
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

    return(
        <TimerContainer>
            <MainTime>
                {minutes >= 10 ? minutes : '0' + minutes}:{seconds >= 10 ? seconds : '0' + seconds}
            </MainTime>
            <Exercise>
                <h2>{resting ? 'Rest' : exercisesInTimer[round - 1]}</h2>
            </Exercise>
            <TimerDetails>
                <Controls onClick={handleRestart}>
                    <FontAwesomeIcon icon={faRedo} />
                </Controls>
                <Rounds>
                    <p>{`Rounds: ${round} of ${totalRounds}`}</p>
                </Rounds>
                <Controls onClick={handleStart}>
                    {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Controls>
            </TimerDetails>
        </TimerContainer>
    )
}

export default IntervalTimer;