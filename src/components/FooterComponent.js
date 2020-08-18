import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col,} from 'reactstrap';


class Footer extends Component {
    render() {
        return(
            <div>
                <hr></hr>
                <Row className='socialLinks' > 
                <a href='github.com/lpiethe'><i class="fa fa-github fa-2x" aria-hidden="true" style={{padding:'10px'}}></i></a>
                <a href='github.com/lpiethe'><i class="fa fa-envelope fa-2x" aria-hidden="true"style={{padding:'10px'}}></i></a>
                <a href='github.com/lpiethe'><i class="fa fa-linkedin fa-2x" aria-hidden="true"style={{padding:'10px'}}></i></a>
                </Row>

                <h6><i className="fa fa-copyright" aria-hidden="true"></i> Web Design and Development by Lindsay Piethe</h6>
            </div>
        );
    }
}

export default Footer;