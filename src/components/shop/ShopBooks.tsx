import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BookContext } from '../../context/BookContext'
import BookCard from '../cards/BookCard';
import { GridFill } from 'react-bootstrap-icons';
import Rating from '../Rating';
import { LinkContainer } from 'react-router-bootstrap';

const ShopBooks = () => {
    const [books] = useContext(BookContext);

    // For ratings
    const [five, setFive] = useState();
    const [four, setFour] = useState();
    const [three, setThree] = useState();

    useEffect(() => {
        const fiveStar = books.filter((item: any) => item.star >= 4.4);
        const fourStar = books.filter((item: any) => item.star >= 3.4 && item.star < 4.4);
        const threeStar = books.filter((item: any) => item.star >= 2.4 && item.star < 3.4);
        setFive(fiveStar.length);
        setFour(fourStar.length);
        setThree(threeStar.length);
    }, [books])

    return (
        <Container className='shop-books mb-5'>
            <Row className='mt-5'>
                <Col sm={12} md={3} className='pe-4'>
                    <div className="shop-category mb-4">
                        <h4 className='mb-0'>Genre</h4>
                        <div className="categories d-flex flex-column align-items-start">
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="action" id="action" />
                                <label htmlFor="action">Action & Adventure</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="activity" id="activity" />
                                <label htmlFor="activity">Activity Books</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="animals" id="animals" />
                                <label htmlFor="animals">Animals</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="anthologies" id="anthologies" />
                                <label htmlFor="anthologies">Anthologies</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="art" id="art" />
                                <label htmlFor="art">Arts & Literature</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="cars" id="cars" />
                                <label htmlFor="cars">Cars & Trucks</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="classics" id="classics" />
                                <label htmlFor="classics">Classics</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="contemporary" id="contemporary" />
                                <label htmlFor="contemporary">Contemporary</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="cultural" id="cultural" />
                                <label htmlFor="cultural">Cultural</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="european" id="european" />
                                <label htmlFor="european">European</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="foreign" id="foreign" />
                                <label htmlFor="foreign">Foreign Language</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="fiction" id="fiction" />
                                <label htmlFor="fiction">Genre Fiction</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="historical" id="historical" />
                                <label htmlFor="historical">Historical</label>
                            </div>
                            <div className="category">
                                <input className='me-2' type="checkbox" name="uncategorized" id="uncategorized" />
                                <label htmlFor="uncategorized">Uncategorized</label>
                            </div>
                        </div>
                    </div>
                    <div className="shop-category mb-4">
                        <h4 className='mb-0'>Authors</h4>
                        <div className="categories d-flex flex-column align-items-start">
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="arthur" id="arthur" />
                                <label htmlFor="arthur">Arthur Gonzalez</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="dana" id="dana" />
                                <label htmlFor="dana">Dana Chambers</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="ernesto" id="ernesto" />
                                <label htmlFor="ernesto">Ernesto Wade</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="karla" id="karla" />
                                <label htmlFor="karla">Karla Newman</label>
                            </div>
                            <div className="category mb-3 d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="misty" id="misty" />
                                <label htmlFor="misty">Misty Figueroa</label>
                            </div>
                            <div className="category d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="suzanne" id="suzanne" />
                                <label htmlFor="suzanne">Suzanne Casey</label>
                            </div>
                        </div>
                    </div>
                    <div className="shop-category mb-4">
                        <h4 className='mb-0'>Filter By Price</h4>
                        <div className="categories d-flex flex-column align-items-start">
                            <div className="category d-flex w-100 align-items-center">
                                <input className='me-2' type="checkbox" name="arthur" id="arthur" />
                                <label htmlFor="arthur">Arthur Gonzalez</label>
                            </div>
                        </div>
                    </div>
                    <div className="shop-category mb-4">
                        <h4 className='mb-0'>Review Ratings</h4>
                        <div className="categories d-flex flex-column align-items-start">
                            <Rating star={5} count={five} />
                            <Rating star={4} count={four} />
                            <Rating star={3} count={three} />
                        </div>
                    </div>
                    <div className="shop-category feature-category">
                        <h4 className='mb-0'>Featured Books</h4>
                        <div className="categories d-flex flex-column align-items-start">
                            {books.slice(21, 24).map((item: any) => {
                                return (
                                    <div className='d-flex mb-3 justify-content-center align-items-center'>
                                        <LinkContainer to={`/shop/${item.id}`} className="feature-img">
                                            <img src={item.image} alt="book" width="80px" />
                                        </LinkContainer>
                                        <div className="feature-name ps-4">
                                            <LinkContainer to={`/shop/${item.id}`}>
                                                <h5 className='mb-0'>{item.title}</h5>
                                            </LinkContainer>
                                            <span>{item.category[0].length > 15 ? item.category[0].substring(0, 14).concat("...") : item.category[0]}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={9} className='mode-cards'>
                    <div className="shop-title-filter d-flex justify-content-between align-items-center mx-3">
                        <div className="list-style-icon d-flex justify-content-center align-items-center">
                            <GridFill className='me-2' />
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="sort-func d-flex justify-content-center align-items-center">
                            <select name="orderby" className="orderby me-3" aria-label="Shop order">
                                <option value="menu_order" selected>Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                            <div className="page-item-count ps-3">
                                <span>Show</span>
                                <select name="pageitem" id="pageitem">
                                    <option value="6">6</option>
                                    <option value="9">9</option>
                                    <option value="12" selected>12</option>
                                    <option value="15">15</option>
                                    <option value="18">18</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Row>
                        {books.map((item: any) => {
                            return (
                                <Col sm={12} md={4}>
                                    <BookCard id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} cutTitle={false} />
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ShopBooks