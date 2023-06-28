import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { LangContext } from '../../context/LangContext'

const SaleInfoBar: React.FC = () => {
    const [lang] = useContext(LangContext);
    return (
        <div className="sale-info-bar py-3">
            <Container>
                <div className="row bar-bg">
                    <div className="col-12 col-sm-6 col-md-5"></div>
                    <div className="col-12 col-sm-6 col-md-7">
                        <div className="row">
                            <div className="col-12 col-sm 6 col-md-8 text-center">
                                <h5 className='text-uppercase'>{lang === "en" ? "Our biggest sale" : "Bizim ən böyük satışımız"}</h5>
                                <h3>{lang === "en" ? "Only $5.99 a month" : "Ayda sadəcə $5.99"}</h3>
                                <p>{lang === "en" ? "For The First 5 Months" : "İlk 5 ay üçün"}</p>
                            </div>
                            <div className="col-12 col-sm 6 col-md-4 btn-part d-flex flex-column align-items-end justify-content-center">
                                <p className='mb-2'>{lang === "en" ? "Online Book’s store!" : "Onlayn Kitab Mağazası"}</p>
                                <LinkContainer to="/shop">
                                    <a href="/" className='text-decoration-none'>
                                        {lang === "en" ? "Shop Now" : "İndi alış-veriş et"} <ChevronRight fontSize={12} />
                                    </a>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SaleInfoBar