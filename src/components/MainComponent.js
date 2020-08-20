import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Home from './HomePageComponent';
import Contact from './ContactComponent';
import NavBar from './NavBarComponent';

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <Router>

            <div>
                <NavBar />
               <Header/>
                    <Switch>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Projects" component={Projects}/>
                <Route exact path="/Contact" component={Contact}/> 
                <Route exact path="/" component={HomePage}/> 
                    </Switch>
                
          <Footer/>
            </div>
            </Router>
        );
    }
}

export default Main;