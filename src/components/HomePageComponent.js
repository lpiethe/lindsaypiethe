import React, { Component } from 'react';
import { Col, Row, Container, Card, CardBody, CardTitle } from 'reactstrap';

class Home extends Component {
    render() {
        return(
<Container className='Home'>
    <Row>
        <Col>
            <CardTitle>About</CardTitle>
        </Col>
        <Col>
            <CardTitle>Previous Work</CardTitle>
        </Col>
        <Col>
            <CardTitle>Contact</CardTitle>
        </Col>
    </Row>
</Container>
        );
    }
}

export default Home;