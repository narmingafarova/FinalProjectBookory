import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import { ChevronRight } from 'react-bootstrap-icons';

const HomeCarousel: React.FC = () => {
    return (
        <Carousel className='carousel-fade'>
            <Carousel.Item interval={10000}>
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
                        <p className='mb-0 animate__animated animate__fadeInUp animate__delay-2s'><span>Christmas</span> Pop Up </p>
                        <p className='mb-0 animate__animated animate__fadeInUp animate__delay-3s'>Book Gift Ideas</p>
                    </h1>
                    <p className='mb-5 animate__animated animate__fadeInUp animate__delay-4s'>Find the perfect gift for everyone on your list</p>
                    <a href="/" className='text-decoration-none animate__animated animate__fadeInUp animate__delay-5s'>
                        Shop Now &nbsp; <ChevronRight fontSize={11} />
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
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
                    <p className='animate__animated animate__fadeInUp animate__delay-1s text-uppercase mb-2 sub-title'>Special Offer</p>
                    <h1>
                        <p className='mb-0 animate__animated animate__fadeInUp animate__delay-2s'><span>Reading</span> is for </p>
                        <p className='mb-0 animate__animated animate__fadeInUp animate__delay-3s'>all Ages</p>
                    </h1>
                    <p className='mb-5 animate__animated animate__fadeInUp animate__delay-4s'>Buy your books in a store</p>
                    <a href="/" className='text-decoration-none animate__animated animate__fadeInUp animate__delay-5s'>
                        Shop Now &nbsp; <ChevronRight fontSize={11} />
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeCarousel