import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomePageComponent';
class App extends Component {
  render() {
    return (
<div className='App'>
  <Header />
  <Home />
</div>
    );
  }
}

export default App;
