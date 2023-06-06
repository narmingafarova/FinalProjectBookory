import React from 'react'
// import { Col } from 'react-bootstrap';
// import { SwiperSlide } from "swiper/react";

interface Book {
  image: string,
  title: string,
  author: string,
  price: string,
  star: number
}

const BookCard: React.FC<Book> = ({ image, title, author, price, star }) => {
  return (
    // <Col sm={12} md={3}>
    //   <div className="book-card">
    //     <div className="book-image">
    //       <img src={image} alt="book" width={180} />
    //     </div>
    //   </div>
    // </Col>
    // <SwiperSlide>
    //   <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/4.jpg" alt="" />
    // </SwiperSlide>
    <div className='book-card d-flex flex-column align-items-center justify-content-center'>
      <div className="book-img d-flex align-items-center justify-content-center">
        <img src={image} alt="" width="80%" />
      </div>
      <div className="book-info pt-3">
        <a href='/' className="book-name text-decoration-none mb-2">{title.length > 20 ? title.substring(0, 15).concat("...") : title}</a>
        <div className="rating d-flex align-items-center">
          <span>
            <i
              style={{ color: "#fa8c17" }}
              className={
                star >= 1
                  ? "fa-solid fa-star"
                  : star >= 0.5
                    ? "fa-solid fa-star-half-stroke"
                    : "fa-regular fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color: "#fa8c17" }}
              className={
                star >= 2
                  ? "fa-solid fa-star"
                  : star >= 1.5
                    ? "fa-solid fa-star-half-stroke"
                    : "fa-regular fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color: "#fa8c17" }}
              className={
                star >= 3
                  ? "fa-solid fa-star"
                  : star >= 2.5
                    ? "fa-solid fa-star-half-stroke"
                    : "fa-regular fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color: "#fa8c17" }}
              className={
                star >= 4
                  ? "fa-solid fa-star"
                  : star >= 3.5
                    ? "fa-solid fa-star-half-stroke"
                    : "fa-regular fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color: "#fa8c17" }}
              className={
                star >= 5
                  ? "fa-solid fa-star"
                  : star >= 4.5
                    ? "fa-solid fa-star-half-stroke"
                    : "fa-regular fa-star"
              }
            ></i>
          </span>
          <span className='total-star'>5</span>
        </div>
        <a href='/' className="author text-decoration-none">{author}</a>
        <div className="price mt-2">${price}</div>
      </div>
    </div>
  )
}

export default BookCard