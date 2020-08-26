import React, {Component} from 'react';
import {Navbar, NavbarToggler, Collapse, NavLink, NavItem, Container} from 'reactstrap';

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
                <Navbar  color='faded' light expand='md'>
                <NavbarToggler onClick={this.toggleNav} className="mr-2"/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Container className='Navigation'>
                             <NavItem>
                                 <NavLink href='/' className='navlink'>Home</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='/projects' className='navlink'>Portfolio</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink className='navlink' href='/about'>About</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='/contact' className='navlink'>Contact</NavLink>
                             </NavItem>
                        </Container>
                    </Collapse>
                </Navbar> 
            </React.Fragment>
        );
    }
}


export default NavBar;