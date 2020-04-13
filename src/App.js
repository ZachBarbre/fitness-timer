import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar.jsx';
import Timer from './components/Timer.jsx';
import Blog from './components/Blog.jsx';

  const Wrapper = styled.div`
    margin: 2%;
  `;

  const GetAnotherButton = styled.button`
    background: #2078b0;
    margin: 2% auto;
    padding: 1% 2%;
    color: #FFF;
    font-size: 1.1rem;
    min-width: 320px;
    max-width: 580px;
  `;

  const CenterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

const App = () => {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Wrapper>
        <Timer />
        <Blog />
        <CenterItem>
          <GetAnotherButton>That's too fucking hard! Give me another!</GetAnotherButton>
        </CenterItem>
      </Wrapper>
    </div>
  );
}

export default App;
