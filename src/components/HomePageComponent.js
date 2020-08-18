import React, { Component } from 'react';
import { Col, Row, Container, Card, CardBody, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
<Container className='Home'>
    <Row>
        
        <Col>
        <Card>
            <Link to='Projects'>
                {/* <a href='#'className = 'column col-xs-6' id = 'caption'> */}
                    {/* <span className = 'textWhite'>
                        <h2>Past Projects</h2>
                    </span> */}
                <CardImg src={require("../melinda-gimpel-8_2K3ptM5oo-unsplash.jpg")} />
                <CardImgOverlay>
                <CardTitle className='topHeaderBlack'><h4>PAST PROJECTS</h4></CardTitle>
                </CardImgOverlay>
                {/* </a> */}
            </Link>
        </Card>
        </Col>
        <Col>
        <Card>
            <Link to='About'>
                {/* <a href='#'className = 'column col-xs-6' id = 'caption'> */}
                {/* <span className = 'text'><h2>About</h2></span> */}
                <CardImg src={require("../gaelle-marcel-AzodV2D0GLc-unsplash.jpg")} />
                <CardImgOverlay>
                <CardTitle className='topHeaderBlack'><h4>ABOUT</h4></CardTitle>
                </CardImgOverlay>
                {/* </a> */}
            </Link>
        </Card>
        </Col>
        <Col>
        <Card>
           <Link to='contact'>
               {/* <a href='#'className = 'column col-xs-6' id = 'caption'>
                   <span className = 'text'>
                       <h2>Contact</h2>
                    </span> */}
                <CardImg src={require("../coco-tafoya-EV_oX9Hf620-unsplash.jpg")} />
                {/* </a> */}
    <CardImgOverlay>
        <CardTitle className='topHeaderBlack'><h4>CONTACT</h4></CardTitle>
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