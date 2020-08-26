import React, { Component } from 'react';
import { Col, Row, Container, Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
<Container className='Home'>
    <Row>
        <Col className='homeCard'>
            <Card className='border-0'>
                <Link to='Projects'>
                    <CardImg src={require("../melinda-gimpel-8_2K3ptM5oo-unsplash.jpg")} className='image'/>
                        <CardImgOverlay className='middleHome'>
                            <CardTitle className='hometext'><h4>Portfolio</h4></CardTitle>
                        </CardImgOverlay>
                </Link>
            </Card>
        </Col>
        <Col className='homeCard'>
            <Card className='border-0'>
                <Link to='About'>
                    <CardImg src={require("../gaelle-marcel-AzodV2D0GLc-unsplash.jpg")} className='image' />
                        <CardImgOverlay className='middleHome'>
                            <CardTitle className='hometext'><h4>About Me</h4></CardTitle>
                        </CardImgOverlay>
                </Link>
            </Card>
        </Col>
        <Col className='homeCard'>
            <Card className='border-0'>
                <Link to='contact'>
                    <CardImg src={require("../coco-tafoya-EV_oX9Hf620-unsplash.jpg")} className='image'/>
                    <CardImgOverlay className='middleHome'>
                        <CardTitle className='hometext'><h4>Connect</h4></CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </Col>
    </Row>
</Container>
        );
    }
}

export default Home;