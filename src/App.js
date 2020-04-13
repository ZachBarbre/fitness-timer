import React from 'react';
import styled from 'styled-components';
import Timer from './components/Timer.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  const Wrapper = styled.div`
    margin: 2%;
  `;

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Wrapper>
        <Timer />
      </Wrapper>
    </div>
  );
}

export default App;
