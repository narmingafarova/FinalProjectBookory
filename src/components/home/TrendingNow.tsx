import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { BookContext } from '../../context/BookContext'
import BookCard from '../cards/BookCard'
import AOS from 'aos';

import Slider from "react-slick";
import { LinkContainer } from 'react-router-bootstrap'
import { LangContext } from '../../context/LangContext'

const TrendingNow: React.FC = () => {
    const [books] = useContext(BookContext)
    const [trend, setTrend] = useState([])

    const [lang] = useContext(LangContext);

    useEffect(() => {
        const trendBooks = books.filter((item: any) => item.mode === "trend");
        setTrend(trendBooks);
        AOS.init();
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
        <div className="trending-now pt-5">
            <Container>
                <div className="section-header mb-4">
                    <div className="row">
                        <div className="col-6 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>{lang === "en" ? "Trending Now" : "İndi Trenddəkilər"}</h4>
                        </div>
                        <div className="col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2 d-flex justify-content-end">
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
                            {trend.map((item: any) => {
                                return <BookCard key={item.id} item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={true} flexStyle='flex-column' briefDesc={item.briefDescription} listChange={false} />
                            })}
                        </Slider>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="section-main-card trend-main-card d-flex flex-column justify-content-between">
                            <div className="card-title">
                                <h4>{lang === "en" ? "Buy One, Get One 30% off" : "Birini al, birini 30% endirimlə əldə et"}</h4>
                                <h3>{lang === "en" ? "30% Off" : "30% Endirim"}</h3>
                                <span>{lang === "en" ? "This offer is valid at Bookory" : "Bu təklif 1 oktyabr 2022-ci ildən"} <br /> {lang === "en" ? "from October 1, 2022" : "Bookory-də keçərlidir"}</span>
                            </div>
                            <div className="card-foot">
                                <span>{lang === "en" ? "Got Questions" : "Suallar var"} ?</span>
                                <p className='mb-0'>+(84)-1800-4635</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrendingNow