import React, { useState } from "react";
import Rating from "../Rating";
import { LinkContainer } from "react-router-bootstrap";
import { Basket } from "react-bootstrap-icons";
import { Button, Col, Modal, Row } from "react-bootstrap";

interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  price: string;
  star: any;
  category: any;
  tags: any;
  cutTitle: boolean;
  flexStyle: string;
  briefDesc: string;
  listChange: boolean;
}

const BookCard: React.FC<Book> = ({ id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
        <div className="book-img-div d-flex align-items-center justify-content-center">
          <LinkContainer
            to={`/shop/${id}`}
            className="book-img d-flex align-items-center justify-content-center"
          >
            <img src={image} alt="book" />
          </LinkContainer>
          <div className={`book-img-hover d-flex flex-column ${flexStyle === "flex-column" ? "" : "d-none"}`}>
            <Button variant="none" className="wish-icon mb-2">
              <i className="fa-regular fa-heart"></i>
            </Button>
            <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
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
        <Modal show={show} onHide={handleClose} animation={true} data-aos="flip-right" centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
                <img src={image} alt="book" width="330px" />
              </Col>
              <Col sm={12} md={6} className="book-info">
                <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
                  <p>{title}</p>
                </LinkContainer>
                <Rating star={star} count="5" />
                <div className="book-price">${price}</div>
                <div className="book-desc mb-3">{briefDesc}</div>
                <label htmlFor="quantity">Quantity</label>
                <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
                  <div className="modal-quantity d-flex align-items-center me-3">
                    <button className="d-flex align-items-center justify-content-center" onClick={() => {
                      quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                    }}>-</button>
                    <input type="number" id="quantity" name="quantity" min="1" max="999" value={quantity} />
                    <button className="d-flex align-items-center justify-content-center" onClick={() => { setQuantity(quantity + 1) }}>+</button>
                  </div>
                  <a href="/" className='text-decoration-none section-btn me-3'>
                    <Basket /> &nbsp; Add to cart
                  </a>
                  <Button variant="none" className="add-wish">
                    <i className="fa-regular fa-heart"></i>
                  </Button>
                </div>
                <div className="modal-cat-tag">
                  <div className="categories d-flex align-items-start">
                    <span>Categories: </span>
                    <div className="list ms-2 d-flex flex-wrap">
                      {category.map((item: any, id: any) => {
                        return (
                          <>
                            <LinkContainer to="/shop" onClick={handleClose}>
                              <span className="d-inline">{item}{item === category[category.length - 1] ? "" : ','}</span>
                            </LinkContainer>
                            <span style={{ whiteSpace: 'pre-wrap' }}> </span>
                          </>
                        )
                      })}
                    </div>
                  </div>
                  <div className="tags d-flex align-items-start">
                    <span>Tags: &nbsp;</span>
                    <div className="list ms-2 d-flex flex-wrap">
                      {tags.map((item: any, id: any) => {
                        return (
                          <>
                            <LinkContainer to="/shop" onClick={handleClose}>
                              <span className="d-inline">{item}{item === tags[tags.length - 1] ? "" : ","}</span>
                            </LinkContainer>
                            <span style={{ whiteSpace: 'pre-wrap' }}> </span>
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default BookCard;
