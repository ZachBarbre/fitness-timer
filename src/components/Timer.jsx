import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { TimerContainer, MainTime, Exercise, TimerDetails, Rounds, Controls } from './TimerStyles';

const Timer = () => {
    const [time, setTime] = useState()
    return(
        <TimerContainer>
            <MainTime>1:00:00</MainTime>
            <Exercise>
                <h2>Exercise</h2>
            </Exercise>
            <TimerDetails>
                <Controls>
                    <FontAwesomeIcon icon={faRedo} />
                </Controls>
                <Rounds>
                    <p>Rounds</p>
                </Rounds>
                <Controls>
                    <FontAwesomeIcon icon={faPlay} />
                </Controls>
            </TimerDetails>
        </TimerContainer>
    )
}

export default Timer;