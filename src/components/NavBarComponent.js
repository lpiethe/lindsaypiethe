import React, {Component} from 'react';
import {Navbar, NavbarToggler, Collapse, NavLink, NavItem, Nav} from 'reactstrap';

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
                                 <NavLink className='navlink' href='./about'>About</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='./contact' className='navlink'>Contact</NavLink>
                             </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar> 
            </React.Fragment>
        );
    }
}


export default NavBar;