import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <Container className='About'>
                <Row>
                <Col xs='6' className='aboutPicture'>
                    <img src={require("../AboutPicture.png")} width='400' height='400'className='aboutPicture'/>
                </Col>
                <Col className='aboutHello'>
                <h1>Hello!</h1>
                <p>fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf
                fjdskjfksjflksdjfklsdjflskdjfkljdslkjfdslkjfldksjflksdf

                </p>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default About;