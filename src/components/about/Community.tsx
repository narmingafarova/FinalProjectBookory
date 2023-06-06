import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const Community = () => {
    return (
        <div className="community py-4">
            <Container className='community-bg'>
                <Row className='community-bar'>
                    <Col sm={12} md={6} className='community-text'>
                        <h4 className='text-capitalize mb-2'>Join the community</h4>
                        <p className='me-auto'>Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.</p>
                        <Form className='me-auto'>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    type="email"
                                    placeholder="Your email address"
                                />
                            </Form.Group>
                            <Button type='submit'>Subscribe <ChevronRight className='ms-2' fontSize={11} /></Button>
                        </Form>
                    </Col>
                    <Col sm={12} md={6} className='community-img'>
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h2_img.png" alt="community" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Community