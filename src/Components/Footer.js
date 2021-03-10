import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Footer = () => {
    return (
        <footer>
            <Row>
                <Col>
                    <p>Tell your friends about this awesome blog by sharing it on social media</p>
                </Col>
            <Col>
                <Form>
                <p>Contact us</p>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                     </Form.Group>
                     <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>What would you like to tell us?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <p>Copyright 2021 Michael, Said & Julia</p>
            </Row>
        </footer>
    )
}

export default Footer
