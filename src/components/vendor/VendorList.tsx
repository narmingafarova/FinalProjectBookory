import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rating from '../Rating'
import { ChevronRight, Filter, GridFill, List, Telephone } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { LangContext } from '../../context/LangContext'

const vendorData = [
    {
        vendorId: 1,
        vendorName: "Barone LLC.",
        vendorAddress: "8502 Preston Rd. Inglewood, Maine 98380, Selangor, Malaysia",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store7.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-7.jpg",
        vendorStar: 4
    },
    {
        vendorId: 2,
        vendorName: "Gregstore",
        vendorAddress: "2715 Ash Dr. San Jose, South Dakota 83475, Free State, South Africa",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store8.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-8.jpg",
        vendorStar: 4.5
    },
    {
        vendorId: 3,
        vendorName: "Arlene",
        vendorAddress: "8502 Preston Rd. Inglewood, Maine 98380, Alaska, United States (US)",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store9.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-9.jpg",
        vendorStar: 4.5
    },
    {
        vendorId: 4,
        vendorName: "Book House",
        vendorAddress: "4140 Parker Rd. Allentown, New Mexico 31134, Nayarit, Mexico",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store5.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-1.jpg",
        vendorStar: 4.5
    },
    {
        vendorId: 5,
        vendorName: "Book Store",
        vendorAddress: "1901 Thornridge Cir. Shiloh, Hawaii 81063, Hawaii, South Sudan",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store3.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-store-3.jpg",
        vendorStar: 4.5
    },
    {
        vendorId: 6,
        vendorName: "Book Place",
        vendorAddress: "2972 Westheimer Rd. Santa Ana, Illinois 85486, San Marino",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store1.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-4.jpg",
        vendorStar: 3.5
    },
    {
        vendorId: 7,
        vendorName: "Library",
        vendorAddress: "6391 Elgin St. Celina, Delaware 10299, Celina, Cambodia",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store2.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-2.jpg",
        vendorStar: 3.5
    },
    {
        vendorId: 8,
        vendorName: "Online Store",
        vendorAddress: "2118 Thornridge Cir. Syracuse, Connecticut 35624, Connecticut, Syria",
        vendorImg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/cropped-bg_store4.jpg",
        vendorLogo: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-5.jpg",
        vendorStar: 3.5
    }
]

const VendorList = () => {
    const [activeCol, setActiveCol] = useState<number>(4);
    const [searchDiv, setSearchDiv] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const [searchvalue, setSearchvalue] = useState<string>("");
    const [lang] = useContext(LangContext);
    return (
        <Container className='vendor-page'>
            <div className="vendor-filter mb-2 d-flex justify-content-between align-items-center">
                <div className="total-vendor">
                    {lang === "en" ? "Total stores showing" : "Ümumi göstərilən mağazalar"}: {vendorData.length}
                </div>
                <div className="vendor-filter-icons d-flex justify-content-between align-items-center">
                    <button className='filter-btn d-flex justify-content-center align-items-center me-3' onClick={() => { searchDiv === "" ? setSearchDiv("active-search") : setSearchDiv("") }}>
                        <Filter className='me-1' /> {lang === "en" ? "Filter" : "Filtr"}
                    </button>
                    <div className="vendor-list">
                        <button className={`me-0 ${activeCol === 4 ? "active-filter" : ""}`} onClick={() => { setActiveCol(4) }}><GridFill fontSize={17} /></button>
                        <button className={activeCol === 12 ? "active-filter" : ""} onClick={() => { setActiveCol(12) }}><List fontSize={19} /></button>
                    </div>
                </div>
            </div>
            <div className={`vendor-search ${searchDiv}`}>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input type="search" name="search" id="search" placeholder={lang === "en" ? "Search Vendors" : "Satıcı Axtar"} onChange={(e) => { setQuery(e.target.value) }} />
                    <div className="search-btn d-flex justify-content-end">
                        <button type='submit' onClick={() => { setSearchvalue(query) }}>{lang === "en" ? "Apply" : "Tətbiq et"}</button>
                    </div>
                </form>
            </div>
            <Row className="vendors g-4">
                {searchvalue === "" ? vendorData.map((item: any) => {
                    return activeCol === 4 ?
                        <Col sm={12} md={4} key={item.id}>
                            <div className="vendor-card">
                                <div className="vendor-header">
                                    <div className="vendor-bg">
                                        <img src={item.vendorImg} alt="vendor" />
                                    </div>
                                    <div className="vendor-store">
                                        <h2 className="vendor-name">{item.vendorName}</h2>
                                        <Rating star={item.vendorStar} count={0} />
                                        <div className="address mb-2">{item.vendorAddress}</div>
                                        <div className="contact">
                                            <Telephone className='me-2' />(406) 555-0120
                                        </div>
                                    </div>
                                </div>
                                <div className="vendor-footer">
                                    <div className="vendor-logo">
                                        <img src={item.vendorLogo} alt="vendor" width={64} />
                                    </div>
                                    <div className="vendor-link">
                                        <LinkContainer to="/vendor">
                                            <span><ChevronRight fontSize={14} /></span>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        :
                        <Col sm={12} md={12} key={item.id}>
                            <div className="vendor-card inline-card d-flex justify-content-between align-items-center">
                                <div className="vendor-img-info d-flex">
                                    <img src={item.vendorImg} alt="vendor" width="260px" />
                                    <div className="vendor-info ms-4">
                                        <h2 className="vendor-name">{item.vendorName}</h2>
                                        <div className="address mb-2">{item.vendorAddress}</div>
                                        <div className="contact">
                                            <Telephone className='me-2' />(406) 555-0120
                                        </div>
                                    </div>
                                </div>
                                <Rating star={item.vendorStar} count={0} />
                                <div className="vendor-link me-4">
                                    <LinkContainer to="/vendor">
                                        <span><ChevronRight fontSize={14} /></span>
                                    </LinkContainer>
                                </div>
                            </div>
                        </Col>
                }) : vendorData.filter(value => value.vendorName.toLocaleLowerCase().includes(searchvalue)).map((item: any) => {
                    return activeCol === 4 ?
                        <Col sm={12} md={4} key={item.id}>
                            <div className="vendor-card">
                                <div className="vendor-header">
                                    <div className="vendor-bg">
                                        <img src={item.vendorImg} alt="vendor" />
                                    </div>
                                    <div className="vendor-store">
                                        <h2 className="vendor-name">{item.vendorName}</h2>
                                        <Rating star={item.vendorStar} count={0} />
                                        <div className="address mb-2">{item.vendorAddress}</div>
                                        <div className="contact">
                                            <Telephone className='me-2' />(406) 555-0120
                                        </div>
                                    </div>
                                </div>
                                <div className="vendor-footer">
                                    <div className="vendor-logo">
                                        <img src={item.vendorLogo} alt="vendor" width={64} />
                                    </div>
                                    <div className="vendor-link">
                                        <LinkContainer to="/vendor">
                                            <span><ChevronRight fontSize={14} /></span>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        :
                        <Col sm={12} md={12} key={item.id}>
                            <div className="vendor-card inline-card d-flex justify-content-between align-items-center">
                                <div className="vendor-img-info d-flex">
                                    <img src={item.vendorImg} alt="vendor" width="260px" />
                                    <div className="vendor-info ms-4">
                                        <h2 className="vendor-name">{item.vendorName}</h2>
                                        <div className="address mb-2">{item.vendorAddress}</div>
                                        <div className="contact">
                                            <Telephone className='me-2' />(406) 555-0120
                                        </div>
                                    </div>
                                </div>
                                <Rating star={item.vendorStar} count={0} />
                                <div className="vendor-link me-4">
                                    <LinkContainer to="/vendor">
                                        <span><ChevronRight fontSize={14} /></span>
                                    </LinkContainer>
                                </div>
                            </div>
                        </Col>
                })}
            </Row>
        </Container >
    )
}

export default VendorList