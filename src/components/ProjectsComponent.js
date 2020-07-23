import React, { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';
class Projects extends Component {
    render() {
        return (
            <Container className='About'>
            <Row>
                <Col xs='6' className='previousWork'>
                    <img src={require("../AboutPicture.png")} width='400' height='400' className='aboutPicture' />
                </Col>
                <Col xs='6' className='previousWork'>
                    <img src={require("../AboutPicture.png")} width='400' height='400' className='aboutPicture' />
                </Col>
                <Col xs='6' className='previousWork'>
                    <img src={require("../AboutPicture.png")} width='400' height='400' className='aboutPicture' />
                </Col>
                </Row>
                </Container>
        );
    }
}

export default Projects;