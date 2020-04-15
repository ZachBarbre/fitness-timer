import React from 'react';
import IntervalTimer from './IntervalTimer';
import RunningTimer from './RunningTimer';

const Timers = {
    IntervalTimer,
    RunningTimer
}

const TimerSwitch = ({ workoutData }) => {
    
    let TimerType = Timers[ workoutData.workoutType ]

    console.log(workoutData);

    return <TimerType workoutData={workoutData} />
}

export default TimerSwitch;