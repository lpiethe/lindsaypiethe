import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            value: 0,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <Container className='About'>
                <Row>
                    <Col xs='6' className='aboutPicture'>
                        <img src={require("../AboutPicture.png")} width='400' height='400' className='aboutPicture' />
                    </Col>
                    <Col className='aboutHello'>
                        <h1 style={{ fontSize: '30px', textAlign: 'left' }}>Who I am</h1>
                        <p> My name is Lindsay Piethe. I'm a web designer and developer in the state of Washington .</p>
                        <h1 style={{ fontSize: '30px', textAlign: 'left' }}>Technical Skills</h1>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                        <h1 style={{ fontSize: '30px', textAlign: 'left' }}>Qualifications</h1>
                        <p>I recently graduated with honors from Nucamp Full Stack Web and Mobile Development Bootcamp. I'm eager to continue learning and expand my knowledge and skillset.</p>
                        <span className="input-group-btn">
                            <Link to="/contact"><a href className="input-group-btn">Contact Me</a></Link>
                        </span>
                        <div>
                            <Button style={{ marginTop: '5px', backgroundColor: 'white', color:'black'}}type='button' onClick={this.toggleModal}>See my resume for more!</Button>
                        </div>

                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <div>
                                <img src={require("../Lindsay Piethe- Resume for website.png")} width='600' className='resume' />
                            </div>
                        </Modal>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;