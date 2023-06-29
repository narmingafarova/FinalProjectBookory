import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ClientCards from '../cards/ClientCards'
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LangContext } from '../../context/LangContext';
import { test_az, test_en } from '../../data/lang';

const Testimonials: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

    const [lang] = useContext(LangContext)
    const [test, setTest] = useState<any>([])
    useEffect(()=>{
        const test = lang === "en" ? test_en : test_az;
        setTest(test);
    },[lang])

    return (
        <div className='testimonials pb-5'>
            <Container>
                <div className="section-header mb-5">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>{lang === "en" ? "What Client Says" : "Müştəri nə deyir"}</h4>
                        </div>
                        <div className="col-4 col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-1"></div>
                    </div>
                </div>
                <Slider {...settings}>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_01.png"} content={`“${test[0]}”`} name='Pam Pruitt' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_02.png"} content={`“${test[1]}”`} name='Joel M.' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png"} content={`“${test[2]}”`} name='Ellie A.' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png"} content={`“${test[1]}”`} name='John Doe' job='New York' />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Testimonials