import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'

const Timer = () => {

    const TimerContainer = styled.section`
        min-width: 320px;
        height: (min-width/2);
        background-color: #B02030;
        color: #FFF;
    `;

    const MainTime = styled.div`
        font-size: 5rem;
        text-align: center;
    `;

    const Exercise = styled.div`
        margin: 1% auto;
        text-align: center;
    `;

    const TimerDetails = styled.div`
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #FFF;
        height: 5vh;
    `;

    const Rounds = styled.div`
        border-left: 1px solid #FFF; 
        border-right: 1px solid #FFF; 
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const Controls = styled.div`
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

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