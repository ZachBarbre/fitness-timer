import React from 'react';
import RestOnInterval from './RestOnInterval';
import RunningTimer from './RunningTimer';
import RestOnRound from './RestOnRound'

const Timers = {
    RestOnInterval,
    RunningTimer,
    RestOnRound
} // need to add a Tabata Timer type, a Continuous Clock timer type, and Count Down 

const TimerSwitch = ({ workoutData }) => {
    
    let TimerType = Timers[ workoutData.workoutType ]

    console.log(workoutData);

    return <TimerType workoutData={workoutData} />
}

export default TimerSwitch;