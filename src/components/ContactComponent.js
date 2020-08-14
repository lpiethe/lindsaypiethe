import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="contact">
                    <h3>Contact Me</h3>
                        {/* <Form className='Form'>
                        <FormGroup>
                            <Label for='name'></Label>
                            <Input type='name' id='name' placeholder='name' />
                            <Label for='email'></Label>
                            <Input type='email' id='email' placeholder='email' />
                            <Label for='email'></Label>
                            <Input type='email' id='email' placeholder='email' />
                        </FormGroup>
                        </Form> */}
                    </Col>
                </Row>
                <Row className='socialLinks'>
                    <Col>
                   <h5><a href='gmail.com'>lpiethe@gmail.com</a></h5>
                    </Col>
                    </Row>
                    <Row className='socialLinks'>
                    <Col>
                        <h5><a href='github.com/lpiethe'>GitHub</a></h5>
                    </Col>
                    </Row>
                    <Row className='socialLinks'>
                    <Col>
                       <h5><a href='https://www.linkedin.com/in/lindsay-piethe-459b2810/'>LinkedIn</a></h5>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;