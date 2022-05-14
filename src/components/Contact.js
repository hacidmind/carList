import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
        <div>
            <h1>Contact Page</h1>

            <Container>
                <Row>
                    <Col md={4} bg="primary">Facebook</Col>
                    <Col md={4}>Twitter</Col>
                    <Col md={4}>Github</Col>
                </Row>
                
            </Container>

            <Button variant="primary" size="lg" active>
                Primary button
            </Button>
        </div>
    );
}

export default Contact;
