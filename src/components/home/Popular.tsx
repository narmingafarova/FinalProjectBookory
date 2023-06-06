import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { BookContext } from '../../context/BookContext'

import Slider from "react-slick";
import BookCard from '../cards/BookCard';

const Popular = () => {
    const [books] = useContext(BookContext)
    const [popular, setPopular] = useState([])

    useEffect(() => {
        const popularBooks = books.filter((item: any) => item.mode === "popular");
        setPopular(popularBooks);
    }, [books])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 7000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <div className="popular pt-5">
            <Container>
                <div className="section-header mb-4">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>Popular Books</h4>
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
                <Row className='mode-cards'>
                    <Col sm={12} md={8}>
                        <Slider {...settings}>
                            {popular.map((item: any) => {
                                return <BookCard image={item.image} title={item.title} author={item.author} price={item.price} star={item.vendorInfo.rating} />
                            })}
                        </Slider>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="section-main-card popular-main-card d-flex flex-column justify-content-between">
                            <div className="card-title">
                                <h3>Our Monthly Picks</h3>
                            </div>
                            <div className="card-foot">
                                <p className='mb-0'>Buy One, Get One <br /> 50% Off*</p>
                                <span>*Current Selections Only.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Popular