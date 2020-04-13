import styled from 'styled-components';

export const TimerContainer = styled.section`
        min-width: 320px;
        max-width: 580px;
        background-color: #B02030;
        color: #FFF;
        margin: 1% auto;
    `;

export const MainTime = styled.div`
    font-size: 5rem;
    text-align: center;
`;

export const Exercise = styled.div`
    margin: 1% auto;
    text-align: center;
`;

export const TimerDetails = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #FFF;
    height: 5vh;
`;

export const Rounds = styled.div`
    border-left: 1px solid #FFF; 
    border-right: 1px solid #FFF; 
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Controls = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`;