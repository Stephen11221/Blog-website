import { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Form from 'react-bootstrap/Form';
class Contact extends Component{
    render(){
        return(
            <div>
                <h3>Contact page </h3>
                <p>Visit us for more blogs on our blogers site</p>
                <Row md={2}>
                <Col></Col>
                <Col>
                <h2>Enter infor</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="@stephen fala"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                </Col>

                </Row>
            </div>
        )
        }

}
export default Contact;