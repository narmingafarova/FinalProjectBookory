import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { BookContext } from '../../context/BookContext'
import BookCard from '../cards/BookCard'
import { LangContext } from '../../context/LangContext'

const FavouriteReads: React.FC = () => {
    const [books] = useContext(BookContext);
    const [firstCard, setFirstCard] = useState<any>();
    const [secondCard, setSecondCard] = useState<any>();
    const [lang] = useContext(LangContext)
    return (
        <div className="favourite-reads pt-5">
            <Container>
                <div className="section-header mb-4">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>{ lang === "en" ? "Our Favourite Reads" : "Sevimli Oxumalarımız"}</h4>
                        </div>
                        <div className="col-4 col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 d-flex justify-content-end">
                            <LinkContainer to="/shop">
                                <a href="/" className='text-decoration-none section-btn'>
                                    {lang === "en" ? "View All" : "Hamısına bax"} &nbsp; <ChevronRight fontSize={11} />
                                </a>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
                <div className="favourite-cards mode-cards">
                    <Row>
                        <Col sm={12} md={3}>
                            {books.slice(24, 28).map((item: any) => {
                                return (
                                    <div className='fav-card-div' onMouseEnter={() => { setFirstCard(item) }} key={item.id}>
                                        <BookCard item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={true} flexStyle='flex-row' briefDesc={item.briefDescription} listChange={false} />
                                    </div>
                                )
                            })}
                        </Col>
                        <Col sm={12} md={3} className='main-fav-card d-flex justify-content-center align-items-center'>
                            <div>
                                {firstCard ? <BookCard item={firstCard} id={firstCard.id} image={firstCard.image} title={firstCard.title} author={firstCard.author} price={firstCard.price} star={firstCard.star} category={firstCard.category} tags={firstCard.tags} cutTitle={false} flexStyle='flex-column' briefDesc={firstCard.briefDescription} listChange={false} />
                                    : books.slice(24, 25).map((item: any) => {
                                        return <BookCard key={item.id} item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={false} flexStyle='flex-column' briefDesc={item.briefDescription} listChange={false} />
                                    })}
                            </div>
                        </Col>
                        <Col sm={12} md={3} className='main-fav-card d-flex justify-content-center align-items-center'>
                            <div>
                                {secondCard ? <BookCard item={secondCard} id={secondCard.id} image={secondCard.image} title={secondCard.title} author={secondCard.author} price={secondCard.price} star={secondCard.star} category={secondCard.category} tags={secondCard.tags} cutTitle={false} flexStyle='flex-column' briefDesc={secondCard.briefDescription} listChange={false} />
                                    : books.slice(12, 13).map((item: any) => {
                                        return <BookCard key={item.id} item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={false} flexStyle='flex-column' briefDesc={item.briefDescription} listChange={false} />
                                    })}
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            {books.slice(12, 16).map((item: any) => {
                                return (
                                    <div className='fav-card-div' onMouseEnter={() => { setSecondCard(item) }} key={item.id}>
                                        <BookCard item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={true} flexStyle='flex-row' briefDesc={item.briefDescription} listChange={false} />
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default FavouriteReads