import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactName: '',
            email: '',
            touched: {
                contactName: false,
                email: false,
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    validate(contactName, email) {

        const errors = {
            contactName: '',
            email: '',
        };

        if (this.state.touched.contactName) {
            if (contactName.length < 2) {
                errors.contactName = 'First name must be at least 2 characters.';
            } else if (contactName.length > 30) {
                errors.contactName = 'Name must be 30 or less characters.';
            }
        }


        
        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
   

   sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfoliowebsite_template', e.target, 'user_lV6lLDHWYWou0igMuIgOu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

alert('Your message has been sent!');
    }
    render() {
        const errors = this.validate(this.state.contactName, this.state.email);
        return (
            <Container className='FadeItems'>
                <Row>
                    <Col className="contact">
                    <h3>Get in Touch!</h3>
                       <Form onSubmit={this.sendEmail} className='Form'>
                        <FormGroup>
                            <Label for='contactName'></Label>
                            <Input 
                                type='contactName'
                                name='contactName' 
                                id='contactName' 
                                placeholder='Name'
                                value={this.state.contactName} 
                                invalid={errors.contactName}
                                onBlur={this.handleBlur("contactName")}
                                onChange={this.handleInputChange}
                                />
                            <FormFeedback>{errors.contactName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'></Label>
                            <Input 
                                type='text'
                                name='email' 
                                id='email' 
                                placeholder='Email'
                                value={this.state.email} 
                                invalid={errors.email}
                                onBlur={this.handleBlur("email")}
                                onChange={this.handleInputChange}
                                />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='subject'></Label>
                            <Input 
                                type='text'
                                name='subject' 
                                id='subject' 
                                placeholder='Subject'
                                value={this.state.subject} 
                                onBlur={this.handleBlur("subject")}
                                onChange={this.handleInputChange}
                                />
                          
                        </FormGroup>
                        <FormGroup>
                            <Label for='message'></Label>
                            <Input 
                                type='textarea'
                                name='message' 
                                id='message' 
                                placeholder='Reason for Inquiry'
                                value={this.state.message} 
                                onBlur={this.handleBlur("message")}
                                onChange={this.handleInputChange}
                                />
                        </FormGroup>
                         <Input type='submit' className='btn btn-secondary' value="Send Message"></Input>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;