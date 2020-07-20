import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="contact">
                    <h3>Contact Me</h3>
                        <Form className='Form'>
                        <FormGroup>
                            <Label for='name'></Label>
                            <Input type='name' id='name' placeholder='name' />
                            <Label for='email'></Label>
                            <Input type='email' id='email' placeholder='email' />
                            <Label for='email'></Label>
                            <Input type='email' id='email' placeholder='email' />
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row className='socialLinks'>
                    <Col>
                        <a href='gmail.com'><i className="fa fa-envelope" aria-hidden="true"></i></a>
                    </Col>
                    <Col>
                        <a href='github.com'><i className="fa fa-github" aria-hidden="true"></i></a>
                    </Col>
                    <Col>
                        <a href='linkedin.com'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;