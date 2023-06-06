import React from 'react'
import { Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const TopVendors = () => {
    return (
        <div className="top-vendors pt-5">
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
                            <a href="/" className='text-decoration-none section-btn'>
                                View All &nbsp; <ChevronRight fontSize={11} />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopVendors