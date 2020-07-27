import React, { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';
class Projects extends Component {
    render() {
        return (
            <Container className='About'>
            <Row>
                <Col xs='6' className='previousWork'>
                    <img src={require("../LindsayPDesignsReactMain.png")} width='550' height='700'  />
                </Col>
                <Col xs='6' className='previousWork'>
                    <img src={require("../ThreeSistersMain.png")} width='550' height='700'  />
                </Col>
            </Row>
                </Container>
        );
    }
}

export default Projects;