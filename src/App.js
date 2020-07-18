import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomePageComponent';
import Footer from './components/FooterComponent';
class App extends Component {
  render() {
    return (
<div className='App'>
  <Header />
  <Home />
  <Footer />
</div>
    );
  }
}

export default App;
