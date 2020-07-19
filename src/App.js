import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomePageComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Home />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
