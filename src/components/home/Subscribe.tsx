import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const Subscribe:React.FC = () => {
    return (
        <div className="subscribe py-4">
            <Container className='subscribe-bg text-center'>
                <h4 className='text-capitalize mb-2'>Get <span>10%</span> off your order!</h4>
                <p className='mb-3'>Enter your email and receive a 10% discount on your next order!</p>
                <Form className='mx-auto'>
                    <Form.Group controlId="validationCustom01">
                        <Form.Control
                            type="email"
                            placeholder="Your email address"
                        />
                    </Form.Group>
                    <Button type='submit'>Subscribe <ChevronRight fontSize={11} className='ms-2'/></Button>
                </Form>
            </Container>
        </div>
    )
}

export default Subscribe