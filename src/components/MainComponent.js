import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Home from './HomePageComponent';
import Contact from './ContactComponent';
import NavBar from './NavBarComponent';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

class Main extends Component {
    render() {

        const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
        
        
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <Router history={history}>

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