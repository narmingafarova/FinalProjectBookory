import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LangContext } from '../../context/LangContext'

const Subscribe:React.FC = () => {
    const [lang] = useContext(LangContext);
    return (
        <div className="subscribe py-4">
            <Container className='subscribe-bg text-center'>
                <h4 className='text-capitalize mb-2'>{lang === "en" ? "Get" : "Sifarişinizə"} <span>10%</span> {lang === "en" ? "off your order!" : "endirim əldə edin!"} </h4>
                <p className='mb-3'>{lang === "en" ? "Enter your email and receive a 10% discount on your next order!" : "E-poçtunuzu daxil edin və növbəti sifarişinizə 10% endirim əldə edin!"}</p>
                <Form className='mx-auto'>
                    <Form.Group controlId="validationCustom01">
                        <Form.Control
                            type="email"
                            placeholder={lang === "en" ? "Your email address" : "Sizin e-poçtunuz"}
                        />
                    </Form.Group>
                    <Button type='submit'>{lang === "en" ? "Subscribe" : "Abunə ol"} <ChevronRight fontSize={11} className='ms-2'/></Button>
                </Form>
            </Container>
        </div>
    )
}

export default Subscribe