import React, {Component} from 'react';
import {Navbar, NavbarToggler, Collapse, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar expand="xl" className='Navigation'>
                <NavbarToggler onClick={this.toggleNav} color='dark'/>
                     <Collapse isOpen={this.state.isNavOpen} navbar color='dark'>
                         <Nav className='mr-auto' navbar>
                             <NavItem>
                                 <NavLink href='/' className='navlink'>Home</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='./projects' className='navlink'>Portfolio</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='./about' className='navlink'>About</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='./contact' className='navlink'>Contact</NavLink>
                             </NavItem>
                    {/* <div className='Navbarlinks'>
                            <Link to="About">
                                <li>Home</li>
                            </Link>
                            <Link to="Work">
                                <li>About</li>
                            </Link>
                            <Link to="Services">
                                <li>Contact</li>
                            </Link>
                    </div> */}
                    </Nav>
                    </Collapse>
                </Navbar> 
            </React.Fragment>
        );
    }
}


export default NavBar;