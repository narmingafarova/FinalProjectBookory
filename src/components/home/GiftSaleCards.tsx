import React from 'react'
import { Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const GiftSaleCards: React.FC = () => {
    return (
        <div className='gift-sale-cards py-4'>
            <Container>
                <div className="row justify-content-between g-5">
                    <div className="col-12 col-sm-6 col-md-6 ps-0">
                        <div className="card-item d-flex justify-content-end">
                        </div>
                        <div className="card-sale">
                            <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/sale.png" alt="sale" />
                        </div>
                        <div className="card-data d-flex flex-column">
                            <h3 className='text-capitalize'>Books make great gifts </h3>
                            <p className='mb-0'>Why not send the gift of a book to family & friends.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 pe-0">
                        <div className="card-item">
                        </div>
                        <div className="card-data">
                            <h4 className='text-uppercase'>Novels every day!</h4>
                            <h3 className='text-capitalize'>Sale 10% off</h3>
                            <p className='mb-3'>It all begins with a great book!</p>
                            <a href="/" className='text-decoration-none'>
                                Shop Now <ChevronRight fontSize={12} />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GiftSaleCards