import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LangContext } from '../../context/LangContext'

const ContactForm: React.FC = () => {
    const [lang] = useContext(LangContext)
    return (
        <div className="contact-form py-5">
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4588906078384!2d49.83908007594627!3d40.37652105808568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e0!3m2!1sen!2saz!4v1684178584426!5m2!1sen!2saz" width="600" height="450" loading="lazy" title='AFMall'></iframe>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <h3 className='mb-3'>{lang === "en" ? "We Would Love To Hear From You." : "Sizdən Eşitmək İstəyirik."}</h3>
                        <p className='mb-3'>{lang === "en" ? "Your email address will not be published. Required fields are marked " : "E-poçt ünvanınız dərc olunmayacaq. Tələb olunan sahələr qeyd olunub "}*</p>
                        <Form>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    type="text"
                                    placeholder={lang === "en" ? "Name *" : "Ad *"}
                                />
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Control
                                    type="email"
                                    placeholder={lang === "en" ? "Email *" : "E-poçt *"}
                                />
                            </Form.Group>
                            <Form.Group controlId="validationCustom03">
                                <Form.Control
                                    as="textarea"
                                    placeholder={lang === "en" ? "Message" : "Şərh"}
                                    cols={40}
                                    rows={3}
                                />
                            </Form.Group>
                            <div className="check d-flex align-items-center">
                                <input type="checkbox" />
                                <label className='ms-2'>{lang === "en" ? "Save my name, email, and website in this browser for the next time I comment." : "Növbəti dəfə şərh yazmaq üçün adımı, e-poçtumu və vebsaytımı bu brauzerdə yadda saxlayın."}</label>
                            </div>
                            <Button type='submit'>{lang === "en" ? "Submit" : "Təqdim et"} <ChevronRight fontSize={10} className='ms-2' /></Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactForm