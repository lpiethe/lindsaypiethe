import React, { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';

class Projects extends Component {
    render() {
        return (
            <Container className='FadeItems'>
                <Row>
                    <Col className='projectHeader'>
                    <h4>Most Recent Web Design/Development Projects</h4>
                    </Col>
                </Row>
            <Row>
                <Col sm='6' mx='auto' className='previousWork'>
                    <img src={require("../LindsayPDesignsReactMain.png")} className='image' width='100%' />
                        <div className='middle'>
                            <div className='text'>
                                <h3>Creative Card Business</h3>
                                <h5> Technical Skills Used:</h5>
                                    <ul>
                                        <li>React</li>
                                        <li>React Native Elements</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                <a href='https://youtu.be/-TuL5YX_a9E' className='youtubeLink' target='_blank'><h5>Watch the video!</h5></a>
                            </div>      
                        </div>
                </Col>
                <Col xs='12' sm='6' mx='auto' className='previousWork'>
                    <img src={require("../ThreeSistersMain.png")}  className='image' width='100%'/>
                        <div className='middle'>
                            <div className='text'>
                                <h3>Event Planning Company</h3>
                                <h5> Technical Skills Used:</h5>                                    
                                    <ul>
                                        <li>React</li>
                                        <li>React Native Elements</li>
                                        <li>Bootstrap</li>
                                        <li>Node.js</li>
                                    </ul>
                                <a href='https://youtu.be/yZ-CexC3hXM' className='youtubeLink' target='_blank'><h5>Watch the video!</h5></a>
                            </div>
                        </div>   
                </Col>
                </Row>
                </Container>
        );
    }
}

export default Projects;