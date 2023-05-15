import React from 'react'
import { Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const SaleInfoBar:React.FC = () => {
    return (
        <div className="sale-info-bar py-3">
            <Container>
                <div className="row bar-bg">
                    <div className="col-12 col-sm-6 col-md-5"></div>
                    <div className="col-12 col-sm-6 col-md-7">
                        <div className="row">
                            <div className="col-12 col-sm 6 col-md-8 text-center">
                                <h5 className='text-uppercase'>Our biggest sale</h5>
                                <h3>Only $5.99 a month</h3>
                                <p>For The First 5 Months</p>
                            </div>
                            <div className="col-12 col-sm 6 col-md-4 btn-part d-flex flex-column align-items-end justify-content-center">
                                <p className='mb-2'>Online Book’s store! </p>
                                <a href="/" className='text-decoration-none'>
                                    Shop Now <ChevronRight fontSize={12}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SaleInfoBar