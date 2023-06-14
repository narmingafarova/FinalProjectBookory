import React, { useContext } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import Rating from '../components/Rating'
import ScrollToTop from '../components/ScrollToTop'
import { LinkContainer } from 'react-router-bootstrap'
import Magnifier from 'react-magnifier';

const ProductDetails = () => {
  const [books] = useContext(BookContext);
  const { id } = useParams();
  const details = books.find((item: any) => item.id.toString() === id);
  return (
    <>
      <ScrollToTop />
      {!details ?
        "empty"
        :
        <Container className='details-page mb-5'>
          <div className="details-breadcrumb">
            <Breadcrumb className='pt-4 pb-3'>
              <Breadcrumb.Item href="/" className='text-uppercase'>Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/shop" className='text-uppercase'>{details.category[1] ?? details.category[0]}</Breadcrumb.Item>
              <Breadcrumb.Item active className='text-uppercase'>{details.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="book-detail">
            <Row>
              <Col sm={12} md={6} className='book-photo'>
                <img src={details.image} alt="book" width="600px" />
                {/* <Magnifier src={details.image} width="600px" /> */}
              </Col>
              <Col sm={12} md={6} className='book-info'>
                <div className="info-title">
                  <div className={`${details.stock ? "stock-mode sale" : "stock-mode sold"}`}>
                    {details.stock ? "In Stock" : "Sold Out"}
                  </div>
                </div>
                <div className="book-title">
                  <div className="book-name">{details.title}</div>
                  <div className="book-author-rate d-flex">
                    <div className="author">
                      Author: &nbsp;
                      <LinkContainer to={`/author/${details.author}`}>
                        <span>{details.author}</span>
                      </LinkContainer>
                    </div>
                    <div className="rate">
                      <Rating star={details.star} count="5" />
                    </div>
                    <div className="sku">
                      SKU: &nbsp; <span>{details.sku}</span>
                    </div>
                  </div>
                </div>
                <div className="price-desc">
                  <div className="price">${details.price}</div>
                  <div className="brief-desc">{details.briefDescription}</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      }
    </>
  )
}

export default ProductDetails