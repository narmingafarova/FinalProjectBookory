import React from 'react'
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';

const ShopCart = () => {
    const { isEmpty } = useCart();
    return (
        <>
            {isEmpty ?
                <Container className='add-cart text-center mb-5'>
                    <div className="empty-icon text-center">
                        <img src="https://icon-library.com/images/shoppingcart-icon/shoppingcart-icon-29.jpg" alt="empty" width="300px" />
                    </div>
                    <h5 className='mb-4'>Your cart is currently empty.</h5>
                    <LinkContainer to="/shop">
                        <a href="/" className='text-decoration-none section-btn'>
                            Return to shop
                        </a>
                    </LinkContainer>
                </Container>
                : <div></div>
            }
        </>
    )
}

export default ShopCart