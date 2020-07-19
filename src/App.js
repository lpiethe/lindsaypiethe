import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';
import Home from './components/HomePageComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Main/>
    </div>
  );
}

export default App;
