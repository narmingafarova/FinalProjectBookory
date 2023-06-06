import React from 'react'
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
    return (
        <div className='testimonials pb-5'>
            <Container>
                <div className="section-header mb-5">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>What Client Says</h4>
                        </div>
                        <div className="col-4 col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-1"></div>
                    </div>
                </div>
                <Slider {...settings}>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_01.png"} content='“This is the best book store!. The prices are great, and there is always a sale of some kind going on. You can find just what you are looking for.”' name='Pam Pruitt' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_02.png"} content='“I am so happy to find a site where I can shop for unusual items. The packaging was phenomenal and my book arrived on time in perfect condition.”' name='Joel M.' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png"} content='“Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.”' name='Ellie A.' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png"} content='“I am so happy to find a site where I can shop for unusual items. The packaging was phenomenal and my book arrived on time in perfect condition.”' name='John Doe' job='New York' />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Testimonials