import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import CategoryCard from '../cards/CategoryCard';
import { Container } from 'react-bootstrap';

const Categories = () => {
    return (
        <div className='pt-5 pb-0 categories'>
            <Container>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    rewind={true}
                    pagination={false}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat1.png' category='Biographies & Memoirs' /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat2.png' category="Children's Books" /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat3.png' category='Christian Living' /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat4.png' category='Church History' /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat5.png' category='Educational Curriculum' /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat6.png' category='Fiction & Fantasy' /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat7.png' category='Religion & Spirituality' /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat8.png' category='Romance Books' /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat9.png' category='Literature & Fiction' /></SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default Categories