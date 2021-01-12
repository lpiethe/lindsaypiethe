import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import ReactGA from 'react-ga';


function initializeReactGA() {
  ReactGA.initialize('UA-181329362-1');
  ReactGA.pageview('/homepage');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeReactGA()
  return (
    <div className="App FadeItems">
   <Main/>
    </div>
  );
}



export default App;
