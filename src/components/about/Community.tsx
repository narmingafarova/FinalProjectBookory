import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LangContext } from '../../context/LangContext'

const Community = () => {
    const [lang] = useContext(LangContext)
    return (
        <div className="community py-4">
            <Container className='community-bg'>
                <Row className='community-bar'>
                    <Col sm={12} md={6} className='community-text'>
                        <h4 className='text-capitalize mb-2'>{lang === "en" ? "Join the community" : "İcmaya qoşulun"}</h4>
                        <p className='me-auto'>{lang === "en" ? "Enter your email address to receive regular updates, as well as news on upcoming events and specific offers" : "Müntəzəm yeniləmələri, eləcə də qarşıdan gələn hadisələr və xüsusi təkliflər haqqında xəbərləri almaq üçün e-poçt ünvanınızı daxil edin"}.</p>
                        <Form className='me-auto'>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    type="email"
                                    placeholder={lang === "en" ? "Your email address" : "Sizin e-poçtunuz"}
                                />
                            </Form.Group>
                            <Button type='submit'>{lang === "en" ? "Subscribe" : "Abunə ol"} <ChevronRight className='ms-2' fontSize={11} /></Button>
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