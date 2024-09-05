import { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faFacebook, faWhatsapp, faInstagram, faLinkedinIn, faWeibo, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
class Contact extends Component{
    render(){
        return(
            <div className="container-main">
                <h3>Contact page </h3>
                <p>Visit us for more blogs on our blogers site</p>
                <Row>
                <Col>
                    <p>You can use our website to sell your blog  or Create blog page. you can subscribe as a blog editor or blog seller with different discount  </p>
                    <p>You can visit us on our platform <FontAwesomeIcon icon={faFacebook}/> <FontAwesomeIcon icon={faWhatsapp}/><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>  <FontAwesomeIcon icon={faLinkedinIn}/> @bloggeer</p>
                    
                </Col>
                <Col>
                <h2>Enter infor</h2>
                <Form className="contact-form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="@stephenfala"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message box</Form.Label>
                        <Form.Control as="textarea" placeholder="Not less 20 words" rows={3} />
                    </Form.Group>
                    <button className="btn-send">Send Message</button>
                </Form>
                </Col>

                </Row>
            </div>
        )
        }

}
export default Contact;