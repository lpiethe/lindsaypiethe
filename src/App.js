import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import ReactGA from 'react-ga';


function App() {
  return (
    <div className="App FadeItems">
   <Main/>
    </div>
  );
}

function initializeReactGA() {
  ReactGA.initialize('UA-250470396');
  ReactGA.pageview('/home');
}

export default App;
