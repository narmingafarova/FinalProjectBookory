import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { BookContext } from '../../context/BookContext'
import Rating from '../Rating'

const TopVendors: React.FC = () => {
    const [books] = useContext(BookContext);

    const [barone, setBarone] = useState<any>(books)
    const [greg, setGreg] = useState<any>(books)
    const [arlene, setArlene] = useState<any>(books)
    const [house, setHouse] = useState<any>(books)

    useEffect(() => {
        const findBarone = books.filter((item: any) => { return item.vendorInfo.storeName === "Barone LLC." });
        const findGreg = books.filter((item: any) => { return item.vendorInfo.storeName === "Gregstore" });
        const findArlene = books.filter((item: any) => { return item.vendorInfo.storeName === "Arlene" });
        const findHouse = books.filter((item: any) => { return item.vendorInfo.storeName === "BookPlace" });

        setGreg(findGreg);
        setArlene(findArlene);
        setBarone(findBarone);
        setHouse(findHouse);
    }, [books])

    return (
        <div className="top-vendors py-5">
            <Container>
                <div className="section-header mb-4">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>Top Selling Vendor</h4>
                        </div>
                        <div className="col-4 col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 d-flex justify-content-end">
                            <LinkContainer to="/vendor">
                                <a href="/" className='text-decoration-none section-btn'>
                                    View All &nbsp; <ChevronRight fontSize={11} />
                                </a>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
                <div className="vendor-content">
                    <Row>
                        <Col sm={12} md={3}>
                            <div className='vendor-items mb-3'>
                                {barone.slice(1, 4).map((item: any) => {
                                    return (
                                        <div className="img-div" key={item.id}>
                                            <LinkContainer to={`/shop/${item.id}`}>
                                                <img src={item.image} alt="book" width="100%" />
                                            </LinkContainer>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="vendor-info d-flex justify-content-start align-items-center">
                                <div className="vendor-img me-3">
                                    <LinkContainer to="/shop">
                                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-7.jpg" alt="barone" />
                                    </LinkContainer>
                                </div>
                                <div className="vendor-data">
                                    <div className="vendor-title d-flex align-items-center justify-content-between">
                                        <LinkContainer to="/shop">
                                            <div className="vendor-name me-2">Barone LLC.</div>
                                        </LinkContainer>
                                        <div className="products-length">({barone.length} products)</div>
                                    </div>
                                    <Rating star={4} count={0} />
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className='vendor-items mb-3'>
                                {greg.slice(0, 3).map((item: any) => {
                                    return (
                                        <div className="img-div" key={item.id}>
                                            <LinkContainer to={`/shop/${item.id}`}>
                                                <img src={item.image} alt="book" width="100%" />
                                            </LinkContainer>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="vendor-info d-flex justify-content-start align-items-center">
                                <div className="vendor-img me-3">
                                    <LinkContainer to="/shop">
                                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-8.jpg" alt="greg" />
                                    </LinkContainer>
                                </div>
                                <div className="vendor-data">
                                    <div className="vendor-title d-flex align-items-center justify-content-between">
                                        <LinkContainer to="/shop">
                                            <div className="vendor-name me-2">Gregstore</div>
                                        </LinkContainer>
                                        <div className="products-length">({greg.length} products)</div>
                                    </div>
                                    <Rating star={4.6} count={0} />
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className='vendor-items mb-3'>
                                {arlene.slice(2, 5).map((item: any) => {
                                    return (
                                        <div className="img-div" key={item.id}>
                                            <LinkContainer to={`/shop/${item.id}`}>
                                                <img src={item.image} alt="book" width="100%" />
                                            </LinkContainer>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="vendor-info d-flex justify-content-start align-items-center">
                                <div className="vendor-img me-3">
                                    <LinkContainer to="/shop">
                                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-9.jpg" alt="arlene" />
                                    </LinkContainer>
                                </div>
                                <div className="vendor-data">
                                    <div className="vendor-title d-flex align-items-center justify-content-between">
                                        <LinkContainer to="/shop">
                                            <div className="vendor-name me-2">Arlene</div>
                                        </LinkContainer>
                                        <div className="products-length">({arlene.length} products)</div>
                                    </div>
                                    <Rating star={4.6} count={0} />
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className='vendor-items mb-3'>
                                {house.slice(0, 3).map((item: any) => {
                                    return (
                                        <div className="img-div" key={item.id}>
                                            <LinkContainer to={`/shop/${item.id}`}>
                                                <img src={item.image} alt="book" width="100%" />
                                            </LinkContainer>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="vendor-info d-flex justify-content-start align-items-center">
                                <div className="vendor-img me-3">
                                    <LinkContainer to="/shop">
                                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-4.jpg" alt="place" />
                                    </LinkContainer>
                                </div>
                                <div className="vendor-data">
                                    <div className="vendor-title d-flex align-items-center justify-content-between">
                                        <LinkContainer to="/shop">
                                            <div className="vendor-name me-2">BookPlace</div>
                                        </LinkContainer>
                                        <div className="products-length">({house.length} products)</div>
                                    </div>
                                    <Rating star={4.6} count={0} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    )
}

export default TopVendors