import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { BookContext } from '../../context/BookContext'
import AOS from 'aos';

import Slider from "react-slick";
import BookCard from '../cards/BookCard';
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../context/LangContext';

const Popular = () => {
    const [books] = useContext(BookContext)
    const [popular, setPopular] = useState([])

    const [lang] = useContext(LangContext)

    useEffect(() => {
        const popularBooks = books.filter((item: any) => item.mode === "popular");
        setPopular(popularBooks);
        AOS.init()
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
                            <h4 className='text-capitalize mb-0'>{lang === "en" ? "Popular Books" : "Populyar Kitablar"}</h4>
                        </div>
                        <div className="col-4 col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 d-flex justify-content-end">
                            <LinkContainer to="/shop">
                                <a href="/" className='text-decoration-none section-btn'>
                                    {lang === "en" ? "View All" : "Hamısına bax"} &nbsp; <ChevronRight fontSize={11} />
                                </a>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
                <Row className='mode-cards gy-4' data-aos="fade-up">
                    <Col sm={12} md={8}>
                        <Slider {...settings}>
                            {popular.map((item: any) => {
                                return <BookCard key={item.id} item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={true} flexStyle='flex-column' briefDesc={item.briefDescription} listChange={false} stock={item.stock}/>
                            })}
                        </Slider>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="section-main-card popular-main-card d-flex flex-column justify-content-between">
                            <div className="card-title">
                                <h3>{lang === "en" ? "Our Monthly Picks" : "Aylıq Seçimlərimiz"}</h3>
                            </div>
                            <div className="card-foot">
                                <p className='mb-0'>{lang === "en" ? "Buy One, Get One" : "Birini Al, Birini"}<br /> {lang === "en" ? "50% Off*" : "50% Endirimlə Əldə Et"}</p>
                                <span>*{lang === "en" ? "Current Selections Only." : "Yalnız Cari Seçimlər."}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Popular