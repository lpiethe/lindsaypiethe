import React, { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';
class Projects extends Component {
    render() {
        return (
            <Container className='About'>
            <Row>
                <Col  sm='6' mx='auto' className='previousWork'>
                    <img src={require("../LindsayPDesignsReactMain.png")} width='100%' />
                    <h3>Lindsay P Designs</h3>
                    <p> My first React project. I created a small business years ago and the website I would have wanted while I had it.</p>
                   <ul>
                        <li>React</li>
                        <li>React Native Elements</li>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col xs='12' sm='6' mx='auto' className='previousWork'>
                    <img src={require("../ThreeSistersMain.png")} width='100%'/>   
                </Col>
                </Row>
                </Container>
        );
    }
}

export default Projects;