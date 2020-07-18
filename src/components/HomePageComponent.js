import React, { Component } from 'react';
import { Col, Row, Container, Card, CardBody, CardTitle, CardImg } from 'reactstrap';

class Home extends Component {
    render() {
        return(
<Container className='Home'>
    <Row>
        <Col>
        <Card>
            {/* <CardTitle><h5>About</h5></CardTitle> */}
            <a href='#'className = 'column col-xs-6' id = 'caption'><span className = 'text'><h2>About</h2></span><CardImg src={require("../gaelle-marcel-AzodV2D0GLc-unsplash.jpg")} /></a>
        </Card>
        </Col>
        <Col>
        <Card>
            {/* <CardTitle><h5>Past Projects</h5></CardTitle> */}
            <a href='#'className = 'column col-xs-6' id = 'caption'><span className = 'textWhite'><h2>Past Projects</h2></span><CardImg src={require("../melinda-gimpel-8_2K3ptM5oo-unsplash.jpg")} /></a>
        </Card>
        </Col>
        <Col>
        <Card>
            {/* <CardTitle><h5>Contact</h5></CardTitle> */}
            <a href='#'className = 'column col-xs-6' id = 'caption'><span className = 'text'><h2>Contact</h2></span><CardImg src={require("../coco-tafoya-EV_oX9Hf620-unsplash.jpg")} /></a>
        </Card>
        </Col>
    </Row>
</Container>
        );
    }
}

export default Home;