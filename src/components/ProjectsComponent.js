import React, { Component } from 'react';
import { Container, Row, Col, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
class Projects extends Component {
    render() {
        return (
            <Container className='About'>
            <Row>
                <Col sm='6' mx='auto' className='previousWork'>
                    <img src={require("../LindsayPDesignsReactMain.png")} className='image' width='100%' />
                        <div className='middle'>
                            <div className='text'>
                                <h3>Creative Business</h3>
                                <p> My first React project. I created a small business years ago and the website I would have wanted while I had it.</p>
                                    <ul>
                                        <li>React</li>
                                        <li>React Native Elements</li>
                                        <li>Bootstrap</li>
                                    </ul>
                            </div>
                        </div>
                </Col>
                <Col xs='12' sm='6' mx='auto' className='previousWork'>
                    <img src={require("../ThreeSistersMain.png")}  className='image' width='100%'/>
                        <div className='middle'>
                            <div className='text'>
                                <h3>Event Planning Company</h3>
                                <p> My first React project. I created a small business years ago and the website I would have wanted while I had it.
                                    <ul style={{textDecoration:'none'}}>
                                        <li>React</li>
                                        <li>React Native Elements</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </p>
                            </div>
                        </div>   
                </Col>
                </Row>
                </Container>
        );
    }
}

export default Projects;