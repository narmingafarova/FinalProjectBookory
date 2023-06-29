import React, { useContext, useState } from "react";
import Rating from "../Rating";
import { LinkContainer } from "react-router-bootstrap";
import { Basket } from "react-bootstrap-icons";
import { Button, Col, Modal, Row } from "react-bootstrap";
import 'animate.css';
import { useCart } from "react-use-cart";
import useSharedCanvas from "../sharedHook/useSharedCanvas";
import { useBetween } from "use-between";
import { ThemeContext } from "../../context/ThemeContext";
import { LangContext } from "../../context/LangContext";

interface Book {
  item: any;
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

const BookCard: React.FC<Book> = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { addItem } = useCart();

  const { setShowCanvas } = useBetween(useSharedCanvas);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mode] = useContext(ThemeContext)
  const [lang] = useContext(LangContext)
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
          <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
            <Button variant="none" className="wish-icon mb-2">
              <i className="fa-regular fa-heart"></i>
            </Button>
            <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
              <i className="fa-regular fa-eye" />
            </Button>
            <Button variant="none" className="add-cart-icon" onClick={() => { addItem(item); setShowCanvas(true); }}>
              <Basket />
            </Button>
          </div>
        </div>
        <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
          <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
            <p>{cutTitle && title.length > 15
              ? title.substring(0, 15).concat("...")
              : title}</p>
          </LinkContainer>
          <Rating star={star} count={star} />
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
            <LinkContainer to="/shop">
              <a href="/" className='text-decoration-none section-btn me-4' onClick={() => { addItem(item); setShowCanvas(true); }}>
                <Basket /> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
              </a>
            </LinkContainer>
            <Button variant="none" className="add-wish">
              <i className="fa-regular fa-heart"></i>
            </Button>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} animation={false} className={`animate__animated animate__rotateInDownRight ${mode === "dark" ? "dark-modal" : ""}`} centered>
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
                <Rating star={star} count={0} />
                <div className="book-price">${price}</div>
                <div className="book-desc mb-3">{briefDesc}</div>
                <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
                <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
                  <div className="modal-quantity d-flex align-items-center me-3">
                    <button className="d-flex align-items-center justify-content-center" onClick={() => {
                      quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                    }}>-</button>
                    <input type="number" readOnly id="quantity" name="quantity" min="1" max="999" value={quantity} />
                    <button className="d-flex align-items-center justify-content-center" onClick={() => { setQuantity(quantity + 1) }}>+</button>
                  </div>
                  <LinkContainer to={window.location.pathname}>
                    <a href="/" className='text-decoration-none section-btn me-3' onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
                      <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
                    </a>
                  </LinkContainer>
                  <Button variant="none" className="add-wish">
                    <i className="fa-regular fa-heart"></i>
                  </Button>
                </div>
                <div className="modal-cat-tag">
                  <div className="categories d-flex align-items-start">
                    <span>{lang === "en" ? "Categories" : "Kateqoriyalar"}: </span>
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
                    <span>{lang === "en" ? "Tags" : "Etiketlər"}: &nbsp;</span>
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
