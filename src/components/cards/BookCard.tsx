import React from "react";
import Rating from "../Rating";
import { LinkContainer } from "react-router-bootstrap";

interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  price: string;
  star: any;
  cutTitle: boolean;
}

const BookCard: React.FC<Book> = ({
  id,
  image,
  title,
  author,
  price,
  star,
  cutTitle,
}) => {
  return (
    <div className="book-card d-flex flex-column  justify-content-center">
      <div className="book-img-div d-flex align-items-center justify-content-center">
        <LinkContainer
          to={`/shop/${id}`}
          className="book-img d-flex align-items-center justify-content-center"
        >
          <img src={image} alt="book" />
        </LinkContainer>
      </div>
      <div className="book-info pt-3">
        <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
          <p>{cutTitle && title.length > 20
            ? title.substring(0, 15).concat("...")
            : title}</p>
        </LinkContainer>
        <Rating star={star} count={5}/>
        <a href="/" className="author text-decoration-none">
          {author}
        </a>
        <div className="price mt-2">
          $
          {!price.toString().split(".")[1]
            ? price.toString().concat(".00")
            : price.toString().split(".")[1].length === 1
              ? price.toString().concat("0")
              : price}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
