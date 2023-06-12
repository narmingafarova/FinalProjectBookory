import React from "react";
import Rating from "../Rating";
import { LinkContainer } from "react-router-bootstrap";
import { Basket } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  price: string;
  star: any;
  cutTitle: boolean;
  flexStyle: string;
  briefDesc: string;
  listChange: boolean
}

const BookCard: React.FC<Book> = ({ id, image, title, author, price, star, cutTitle, flexStyle, briefDesc, listChange }) => {
  return (
    <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
      <div className="book-img-div d-flex align-items-center justify-content-center">
        <LinkContainer
          to={`/shop/${id}`}
          className="book-img d-flex align-items-center justify-content-center"
        >
          <img src={image} alt="book" />
        </LinkContainer>
        <div className="book-img-hover d-flex flex-column">
          <Button variant="none" className="wish-icon mb-2">
            <i className="fa-regular fa-heart"></i>
          </Button>
          <Button variant="none" className="view-icon mb-2">
            <i className="fa-regular fa-eye" />
          </Button>
          <Button variant="none" className="add-cart-icon">
            <Basket />
          </Button>
        </div>
      </div>
      <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
        <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
          <p>{cutTitle && title.length > 20
            ? title.substring(0, 15).concat("...")
            : title}</p>
        </LinkContainer>
        <Rating star={star} count={5} />
        <a href="/" className="author text-decoration-none">
          {author}
        </a>
        <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
        <div className="price mt-2">
          $
          {!price.toString().split(".")[1]
            ? price.toString().concat(".00")
            : price.toString().split(".")[1].length === 1
              ? price.toString().concat("0")
              : price}
        </div>
        <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
          <a href="/" className='text-decoration-none section-btn me-4'>
            <Basket /> &nbsp; Add to cart
          </a>
          <Button variant="none" className="add-wish">
            <i className="fa-regular fa-heart"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
