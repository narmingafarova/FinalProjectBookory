import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import { ChevronRight } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../context/LangContext';
import { carousel_az, carousel_en } from '../../data/lang';

const HomeCarousel: React.FC = () => {
    const [lang] = useContext(LangContext);
    const [carouselData, setCarouselData] = useState<any>([]);
    useEffect(() => {
        const carousel = lang === "en" ? carousel_en : carousel_az;
        setCarouselData(carousel)
    }, [lang])
    return (
        <Carousel className='carousel-fade'>
            <Carousel.Item interval={6000}>
                <div className="main-slider-top-left">
                    <img className='animate__animated animate__fadeInDown' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_7.png" alt="" />
                    <img className='animate__animated animate__fadeInDown' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6.png" alt="" />
                </div>
                <div className="main-slider-right-part slider-right-part">
                    <div className="animate-images">
                        <img className='animate__animated animate__zoomIn animate__delay-1s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_11.png" alt="" width={500} height={400} />
                        <img className='animate__animated animate__zoomIn' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_10.png" alt="" height={350} />
                        <img className='animate__animated animate__fadeInRight animate__delay-3s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_1.png" alt="" />
                        <img className='animate__animated animate__fadeInBottomRight animate__delay-2s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_2.png" alt="" />
                        <img className='animate__animated animate__fadeInUp animate__delay-1s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_12.png" alt="" />
                        <img className='animate__animated animate__fadeInUp animate__delay-1s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_8.png" alt="" />
                    </div>
                </div>
                <Carousel.Caption>
                    <img className='pb-3' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_9.png" alt="" />
                    <h1>
                        <p className='mb-0 animate__animated animate__fadeInUp'><span>{carouselData[0]}</span> {carouselData[1]}</p>
                        <p className='mb-0 slider-text-animate animate__animated animate__fadeInUp animate__delay-1s'>{carouselData[2]}</p>
                    </h1>
                    <p className='mb-5 animate__animated animate__fadeInUp animate__delay-2s'>{carouselData[3]}</p>
                    <LinkContainer to="/shop">
                        <a href="/" className='text-decoration-none animate__animated animate__fadeInUp animate__delay-3s'>
                            {carouselData[4]} &nbsp; <ChevronRight fontSize={11} />
                        </a>
                    </LinkContainer>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
                <div className="second-slider-top-left">
                    <img className='animate__animated animate__fadeInDown' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6.png" alt="" />
                </div>
                <div className="second-slider-right-part slider-right-part">
                    <div className="animate-images">
                        <img className='animate__animated animate__zoomIn animate__delay-1s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_3.png" alt="" width={500} height={400} />
                        <img className='animate__animated animate__zoomIn' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_5.png" alt="" height={350} width={500} />
                        <img className='animate__animated animate__fadeInRight animate__delay-3s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_1.png" alt="" />
                        <img className='animate__animated animate__fadeInUp animate__delay-2s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_2.png" alt="" />
                        <img className='animate__animated animate__fadeInUp animate__delay-2s' src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/rev_home6_04.png" alt="" />
                    </div>
                </div>
                <Carousel.Caption>
                    <p className='animate__animated animate__fadeInUp text-uppercase mb-2 sub-title'>{lang === "en" ? "Special offer" : "Xüsusi təklif"}</p>
                    <h1>
                        <p className='mb-0 animate__animated animate__fadeInUp animate__delay-1s'><span>{carouselData[5]}</span> {carouselData[6]}</p>
                        <p className='mb-0 animate__animated animate__fadeInUp animate__delay-2s'>{carouselData[7]}</p>
                    </h1>
                    <p className='mb-5 animate__animated animate__fadeInUp animate__delay-3s'>{carouselData[8]}</p>
                    <LinkContainer to="/shop">
                        <a href='/' className='text-decoration-none animate__animated animate__fadeInUp animate__delay-4s'>
                        {carouselData[4]} &nbsp; <ChevronRight fontSize={11} />
                        </a>
                    </LinkContainer>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeCarousel