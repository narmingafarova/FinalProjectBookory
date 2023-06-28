import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { LangContext } from '../../context/LangContext'

const GiftSaleCards: React.FC = () => {
    const [lang] = useContext(LangContext);
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
                            <h3 className='text-capitalize'>{lang === "en" ? "Books make great gifts" : "Kitablar böyük hədiyyədir"}</h3>
                            <p className='mb-0'>{lang === "en" ? "Why not send the gift of a book to family & friends." : "Niyə ailə və dostlarınıza bir kitab hədiyyə göndərməyəsiniz?"}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 pe-0">
                        <div className="card-item">
                        </div>
                        <div className="card-data">
                            <h4 className='text-uppercase'>{lang === "en" ? "Novels every day!" : "Hər gün romanlar!"}</h4>
                            <h3 className='text-capitalize'>{lang === "en" ? "Sale 10% off" : "10% Endirim"}</h3>
                            <p className='mb-3'>{lang === "en" ? "It all begins with a great book!" : "Hər şey gözəl bir kitabla başlayır!"}</p>
                            <LinkContainer to="/shop">
                                <a href="/" className='text-decoration-none'>
                                    {lang === "en" ? "Shop Now" : "Indi alış-veriş et"} <ChevronRight fontSize={12} />
                                </a>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GiftSaleCards