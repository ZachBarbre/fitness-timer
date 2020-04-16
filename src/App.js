import React, { useState } from 'react';
import { Wrapper, CenterItem, AppFooter, 
  GetAnotherButton, DSFImage, MeLink } from './components/AppStyles.jsx'
import Navbar from './components/Navbar.jsx';
import TimerSwitch from './components/TimerSwitch.jsx';
import Blog from './components/Blog.jsx';
import { workoutArray } from './data/workoutData';
import { demoData } from './data/demoData';
import Konami from 'react-konami-code';
import dsfLogo from './dsf.png'
import './App.css'

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
    <div className="fullPage">
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
            </Konami>
          </CenterItem>
        </Wrapper>
      </div>
      <AppFooter>
        <div>
          Workouts courtesy of:
          <a href='https://dirtysouthfit.com/'>
            <DSFImage 
            src={dsfLogo} 
            alt='Dirth South Fit logo'
            />
          </a>
        </div>
        <div>
          Created by: 
          <strong>
          <MeLink href='https://zachbarbre.com'>
            Zach Barbre
          </MeLink>
          </strong>
        </div>
        
      </AppFooter>
    </div>
  );
}

export default App;
