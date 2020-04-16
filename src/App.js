import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar.jsx';
import TimerSwitch from './components/TimerSwitch.jsx';
import Blog from './components/Blog.jsx';
import { workoutArray } from './data/workoutData';
import { demoData } from './data/demoData';
import Konami from 'react-konami-code';

const Wrapper = styled.div`
  margin: 2% auto;
`;

const GetAnotherButton = styled.button`
  background: #2078b0;
  margin: 2% auto;
  padding: 1% 2%;
  color: #FFF;
  font-size: 1.1rem;
  min-width: 320px;
  max-width: 580px;
  cursor: pointer;

  &:hover {
    background: #40a0dc;
  }
`;

const CenterItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const App = () => {

  const [workoutData, setWorkoutData] = useState(
    workoutArray[Math.floor(Math.random() * workoutArray.length)]
  );

  const randomWorkout = () => {
    const ranNum = Math.floor(Math.random() * workoutArray.length)
    setWorkoutData(workoutArray[ranNum]);
  }
  const demoWorkout = (index) => {
    setWorkoutData(demoData[index]);
  }

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Wrapper>
        <TimerSwitch workoutData={workoutData}/>
        <Blog workoutData={workoutData}/>
        <CenterItem>
          <GetAnotherButton onClick={randomWorkout}>That's too fucking hard! Give me another!</GetAnotherButton>
        </CenterItem>
        <CenterItem>
          <Konami>
            <button onClick={() => demoWorkout(0)}>Demo Workout</button>
            <button onClick={() => demoWorkout(1)}>Test RoundRest</button>
          </Konami>
        </CenterItem>

      </Wrapper>
    </div>
  );
}

export default App;
