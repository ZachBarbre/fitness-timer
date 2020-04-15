import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { TimerContainer, MainTime, Exercise, TimerDetails, Rounds, Controls } from './TimerStyles';

const Timer = ({ 
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
}) => (
        <TimerContainer>
            <MainTime>
                {minutes >= 10 ? minutes : '0' + minutes}:{seconds >= 10 ? seconds : '0' + seconds}
            </MainTime>
            <Exercise>
                <h2>{workoutType !== 'RunningTimer' ? resting ? 'Rest' : exercisesInTimer[round - 1] : 'WORK!'}</h2>
            </Exercise>
            <TimerDetails>
                <Controls onClick={handleRestart}>
                    <FontAwesomeIcon icon={faRedo} />
                </Controls>
                <Rounds>
                    <p>{workoutType !== 'RunningTimer' ? `Rounds: ${round} of ${totalRounds}` : 'Go until finished!'}</p>
                </Rounds>
                <Controls onClick={handleStart}>
                    {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Controls>
            </TimerDetails>
        </TimerContainer>
)

export default Timer;