import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const ContactForm: React.FC = () => {
    return (
        <div className="contact-form py-5">
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4588906078384!2d49.83908007594627!3d40.37652105808568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e0!3m2!1sen!2saz!4v1684178584426!5m2!1sen!2saz" width="600" height="450" loading="lazy" title='AFMall'></iframe>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <h3 className='mb-3'>We Would Love To Hear From You.</h3>
                        <p className='mb-3'>Your email address will not be published. Required fields are marked *</p>
                        <Form>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    type="text"
                                    placeholder="Name *"
                                />
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Control
                                    type="email"
                                    placeholder="Email *"
                                />
                            </Form.Group>
                            <Form.Group controlId="validationCustom03">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Message"
                                    cols={40}
                                    rows={3}
                                />
                            </Form.Group>
                            <div className="check d-flex align-items-center">
                                <input type="checkbox" />
                                <label className='ms-2'>Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                            <Button type='submit'>Submit <ChevronRight fontSize={10} className='ms-2' /></Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactForm