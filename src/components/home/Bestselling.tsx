import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { BookContext } from '../../context/BookContext'
import AOS from 'aos';

import Slider from "react-slick";
import BookCard from '../cards/BookCard';
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../context/LangContext';

const Bestselling: React.FC = () => {
    const [books] = useContext(BookContext)
    const [best, setBest] = useState([])

    const [lang] = useContext(LangContext);

    useEffect(() => {
        const bestBooks = books.filter((item: any) => item.mode === "best");
        setBest(bestBooks);
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
        <div className="bestselling pt-5">
            <Container>
                <div className="section-header mb-4">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>{lang === "en" ? "Bestselling Books" : "Ən çox satılanlar"}</h4>
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
                            {best.map((item: any) => {
                                return <BookCard key={item.id} item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={true} flexStyle='flex-column' briefDesc={item.briefDescription} listChange={false} />
                            })}
                        </Slider>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="section-main-card bestselling-main-card d-flex flex-column justify-content-between">
                            <div className="card-title">
                                <h4>{lang === "en" ? "Big Sale" : "Böyük Satış"}</h4>
                                <h3>{lang === "en" ? "25% Off" : "25% Endirim"}</h3>
                            </div>
                            <div className="card-foot">
                                <p className='mb-0'>{lang === "en" ? "Kids Love" : "Uşaqlar Kitab"} <br />{lang === "en" ? "Reading Books" : "Oxumağı Sevir"}</p>
                                <span>{lang === "en" ? "It all begins with a great book!" : "Hər şey gözəl bir kitabla başlayır!"}</span>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bestselling