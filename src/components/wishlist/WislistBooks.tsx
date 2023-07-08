import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext'
import { Container } from 'react-bootstrap';

const WislistBooks = () => {
    const [books] = useContext(BookContext);
    return (
        <Container>
            
        </Container>
    )
}

export default WislistBooks