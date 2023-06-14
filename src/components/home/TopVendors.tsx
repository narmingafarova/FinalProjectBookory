import React from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'

const TopVendors = () => {
    return (
        <div className="top-vendors py-5">
            <Container>
                <div className="section-header mb-5">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>Top Selling Vendor</h4>
                        </div>
                        <div className="col-4 col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 d-flex justify-content-end">
                            <LinkContainer to="/shop">
                                <a href="/" className='text-decoration-none section-btn'>
                                    View All &nbsp; <ChevronRight fontSize={11} />
                                </a>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
                <div className="vendor-content">
                    <Row>
                        <Col sm={12} md={3}>hi</Col>
                        <Col sm={12} md={3}>hi</Col>
                        <Col sm={12} md={3}>hi</Col>
                        <Col sm={12} md={3}>hi</Col>
                    </Row>
                </div>
                <Pagination color='red' />
            </Container>
        </div>
    )
}

export default TopVendors