import React from 'react';
import RestOnInterval from './RestOnInterval';
import RunningTimer from './RunningTimer';

const Timers = {
    RestOnInterval,
    RunningTimer
}

const TimerSwitch = ({ workoutData }) => {
    
    let TimerType = Timers[ workoutData.workoutType ]

    console.log(workoutData);

    return <TimerType workoutData={workoutData} />
}

export default TimerSwitch;